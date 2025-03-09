package com.azash.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.tool.schema.internal.exec.GenerationTarget;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Subscription {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Long id;

    private LocalDate subscriptionStartDate;

    private LocalDate subscriptionEndDate;

    private PlanType planType;

    private boolean isValid;

    @OneToOne
    private User user;

}
