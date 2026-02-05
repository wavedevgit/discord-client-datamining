package com.google.android.gms.internal.fido;

import java.util.Comparator;
import java.util.SortedSet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class b2 {
    public static boolean a(Comparator comparator, Iterable iterable) {
        Comparator comparator2;
        comparator.getClass();
        iterable.getClass();
        if (iterable instanceof SortedSet) {
            comparator2 = ((SortedSet) iterable).comparator();
            if (comparator2 == null) {
                comparator2 = q1.f14089d;
            }
        } else if (iterable instanceof a2) {
            comparator2 = ((a2) iterable).comparator();
        } else {
            return false;
        }
        return comparator.equals(comparator2);
    }
}
