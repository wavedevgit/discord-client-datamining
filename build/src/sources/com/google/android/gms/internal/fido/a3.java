package com.google.android.gms.internal.fido;

import java.util.Comparator;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class a3 {

    /* renamed from: a  reason: collision with root package name */
    static final String f14064a;

    /* renamed from: b  reason: collision with root package name */
    static final Comparator f14065b;

    /* JADX WARN: Multi-variable type inference failed */
    static {
        Comparator comparator;
        String concat = a3.class.getName().concat("$UnsafeComparator");
        f14064a = concat;
        try {
            Object[] enumConstants = Class.forName(concat).getEnumConstants();
            Objects.requireNonNull(enumConstants);
            comparator = (Comparator) enumConstants[0];
        } catch (Throwable unused) {
            comparator = z2.INSTANCE;
        }
        f14065b = comparator;
    }
}
