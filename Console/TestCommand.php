<?php

namespace Safta\Module\Console;

use Magento\Framework\App\Area;
use Magento\Framework\App\State;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class TestCommand extends \Symfony\Component\Console\Command\Command
{
    private $moveSoldProductJob;

    private $appState;

    private $consumer;

    private $delete;

    public function __construct(
        State $state,
        \Itdelight\Callback\Cron\DeletionTimer $consumer,
        \Safta\Module\Model\Delete $delete
    ) {
        $this->appState = $state;
        $this->consumer = $consumer;
        $this->delete = $delete;
        parent::__construct();
    }

    protected function configure()
    {
        $this->setName('safta:test');
        $this->setDescription('Move Sold Products in Archive');

        parent::configure();
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $start = microtime(true);
        $this->appState->emulateAreaCode(
            Area::AREA_ADMINHTML,
            [$this, 'move']
        );
        $output->writeln('Move Sold Products - End');
        $output->writeln(round(microtime(true) - $start, 4) . ' sec.');
    }

    public function move()
    {
        $this->delete->execute();
    }
}
