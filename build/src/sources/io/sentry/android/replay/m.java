package io.sentry.android.replay;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private volatile n f27700a = n.INITIAL;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f27701a;

        static {
            int[] iArr = new int[n.values().length];
            try {
                iArr[n.INITIAL.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[n.STARTED.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[n.RESUMED.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[n.PAUSED.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[n.STOPPED.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr[n.CLOSED.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            f27701a = iArr;
        }
    }

    public final n a() {
        return this.f27700a;
    }

    public final boolean b(n newState) {
        Intrinsics.checkNotNullParameter(newState, "newState");
        switch (a.f27701a[this.f27700a.ordinal()]) {
            case 1:
                if (newState == n.STARTED || newState == n.CLOSED) {
                    return true;
                }
                return false;
            case 2:
                if (newState == n.PAUSED || newState == n.STOPPED || newState == n.CLOSED) {
                    return true;
                }
                return false;
            case 3:
                if (newState == n.PAUSED || newState == n.STOPPED || newState == n.CLOSED) {
                    return true;
                }
                return false;
            case 4:
                if (newState == n.RESUMED || newState == n.STOPPED || newState == n.CLOSED) {
                    return true;
                }
                return false;
            case 5:
                if (newState == n.STARTED || newState == n.CLOSED) {
                    return true;
                }
                return false;
            case 6:
                return false;
            default:
                throw new qr.p();
        }
    }

    public final boolean c() {
        if (this.f27700a != n.STARTED && this.f27700a != n.RESUMED) {
            return false;
        }
        return true;
    }

    public final void d(n nVar) {
        Intrinsics.checkNotNullParameter(nVar, "<set-?>");
        this.f27700a = nVar;
    }
}
