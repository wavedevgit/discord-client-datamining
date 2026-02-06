package androidx.work.impl;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class g0 {

    /* renamed from: a  reason: collision with root package name */
    private static final String f6091a;

    /* renamed from: b  reason: collision with root package name */
    private static final String[] f6092b;

    static {
        String i10 = k4.m.i("WrkDbPathHelper");
        Intrinsics.checkNotNullExpressionValue(i10, "tagWithPrefix(\"WrkDbPathHelper\")");
        f6091a = i10;
        f6092b = new String[]{"-journal", "-shm", "-wal"};
    }
}
