package com.google.android.gms.internal.fido;

import java.util.Comparator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class s1 implements Comparator {
    public s1 a() {
        return new x1(this);
    }

    @Override // java.util.Comparator
    public abstract int compare(Object obj, Object obj2);
}
