package com.azash.service;

import com.azash.model.PlanType;
import com.azash.model.Subscription;
import com.azash.model.User;

public interface SubscriptionService {

    Subscription createSubscription(User user);

    Subscription getUserSubscription(Long userId)throws Exception;

    Subscription upgradeSubscription(Long userId, PlanType planType);

    Boolean isValid(Subscription subscription);
}
