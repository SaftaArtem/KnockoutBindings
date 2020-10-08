<?php

namespace Safta\Module\Model;

use Magento\Customer\Model\Customer;
use Magento\Customer\Setup\CustomerSetupFactory;

class Delete
{
    const ATTRIBUTE_CODE = "customer_level";
    private $customerSetupFactory;

    public function __construct(
        CustomerSetupFactory $customerSetupFactory
    ) {
        $this->customerSetupFactory = $customerSetupFactory;
    }

    public function execute()
    {
        $this->removeEavCustomer();
    }

    private function removeEavCustomer()
    {
        $customerSetup = $this->customerSetupFactory->create();
        $customerSetup->removeAttribute(Customer::ENTITY, self::ATTRIBUTE_CODE);
    }
}
