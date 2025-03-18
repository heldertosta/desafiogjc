package com.springsecurity.desafio.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "tb_roles")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "role_id")
    private Long roleId;

    @Column(nullable = false)
    private String name;

    public Role(String name) {
        this.name = name;
    }

    @Getter
    public enum Values {
        ADMIN(1L),
        BASIC(2L);

        long roleId;

        Values(Long roleId) {
            this.roleId = roleId;
        }
    }

}
