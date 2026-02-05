package io.sentry.android.core;

import io.sentry.k0;
import io.sentry.k7;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m0 implements io.sentry.transport.r {

    /* renamed from: a  reason: collision with root package name */
    private final k7 f28124a;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f28125a;

        static {
            int[] iArr = new int[k0.a.values().length];
            f28125a = iArr;
            try {
                iArr[k0.a.CONNECTED.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f28125a[k0.a.UNKNOWN.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f28125a[k0.a.NO_PERMISSION.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public m0(k7 k7Var) {
        this.f28124a = k7Var;
    }

    @Override // io.sentry.transport.r
    public boolean a() {
        return b(this.f28124a.getConnectionStatusProvider().y0());
    }

    boolean b(k0.a aVar) {
        int i10 = a.f28125a[aVar.ordinal()];
        if (i10 == 1 || i10 == 2 || i10 == 3) {
            return true;
        }
        return false;
    }
}
