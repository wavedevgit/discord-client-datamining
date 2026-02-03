package androidx.work.impl;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class g0 {

    /* renamed from: a  reason: collision with root package name */
    private static final String f5650a;

    /* renamed from: b  reason: collision with root package name */
    private static final String[] f5651b;

    static {
        String i10 = k4.m.i("WrkDbPathHelper");
        Intrinsics.checkNotNullExpressionValue(i10, "tagWithPrefix(\"WrkDbPathHelper\")");
        f5650a = i10;
        f5651b = new String[]{"-journal", "-shm", "-wal"};
    }
}
