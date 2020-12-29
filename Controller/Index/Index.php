<?php

namespace Safta\Module\Controller\Index;

class Index extends \Magento\Framework\App\Action\Action
{
    protected $_pageFactory;
    protected $notificationProcessor;

    public function __construct(
        \Magento\Framework\App\Action\Context $context,
        \Magento\Framework\View\Result\PageFactory $pageFactory,
        \Itdelight\Callback\Api\NotificationProcessorInterface $notificationProcessor
    ) {
        $this->_pageFactory = $pageFactory;
        $this->notificationProcessor = $notificationProcessor;
        return parent::__construct($context);
    }

    public function execute()
    {
        return $this->_pageFactory->create();
    }
}
