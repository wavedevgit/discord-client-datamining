package nn;

import android.animation.Animator;
import com.swmansion.rnscreens.ScreenStackFragmentWrapper;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements Animator.AnimatorListener {

    /* renamed from: e  reason: collision with root package name */
    public static final b f40957e = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final ScreenStackFragmentWrapper f40958a;

    /* renamed from: b  reason: collision with root package name */
    private final i f40959b;

    /* renamed from: c  reason: collision with root package name */
    private final a f40960c;

    /* renamed from: d  reason: collision with root package name */
    private c f40961d;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        public static final a f40962d = new a("ENTER", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f40963e = new a("EXIT", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ a[] f40964i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f40965o;

        static {
            a[] a10 = a();
            f40964i = a10;
            f40965o = xr.a.a(a10);
        }

        private a(String str, int i10) {
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f40962d, f40963e};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f40964i.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c {

        /* renamed from: d  reason: collision with root package name */
        public static final c f40966d = new c("INITIALIZED", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final c f40967e = new c("START_DISPATCHED", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final c f40968i = new c("END_DISPATCHED", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ c[] f40969o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f40970p;

        static {
            c[] a10 = a();
            f40969o = a10;
            f40970p = xr.a.a(a10);
        }

        private c(String str, int i10) {
        }

        private static final /* synthetic */ c[] a() {
            return new c[]{f40966d, f40967e, f40968i};
        }

        public static c valueOf(String str) {
            return (c) Enum.valueOf(c.class, str);
        }

        public static c[] values() {
            return (c[]) f40969o.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class d {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f40971a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f40972b;

        static {
            int[] iArr = new int[c.values().length];
            try {
                iArr[c.f40966d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[c.f40967e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[c.f40968i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f40971a = iArr;
            int[] iArr2 = new int[a.values().length];
            try {
                iArr2[a.f40962d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[a.f40963e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            f40972b = iArr2;
        }
    }

    public e(ScreenStackFragmentWrapper wrapper, i iVar, a animationType) {
        Intrinsics.checkNotNullParameter(wrapper, "wrapper");
        Intrinsics.checkNotNullParameter(animationType, "animationType");
        this.f40958a = wrapper;
        this.f40959b = iVar;
        this.f40960c = animationType;
        this.f40961d = c.f40966d;
    }

    private final void a() {
        c cVar;
        int i10 = d.f40971a[this.f40961d.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    cVar = c.f40968i;
                } else {
                    throw new qr.p();
                }
            } else {
                cVar = c.f40968i;
            }
        } else {
            cVar = c.f40967e;
        }
        this.f40961d = cVar;
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationCancel(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationEnd(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        if (this.f40961d == c.f40967e) {
            a();
            animation.removeListener(this);
            int i10 = d.f40972b[this.f40960c.ordinal()];
            boolean z10 = true;
            if (i10 != 1) {
                if (i10 == 2) {
                    i iVar = this.f40959b;
                    if (iVar != null) {
                        iVar.b();
                    }
                } else {
                    throw new qr.p();
                }
            } else {
                i iVar2 = this.f40959b;
                if (iVar2 != null) {
                    iVar2.a();
                }
            }
            if (this.f40960c != a.f40963e) {
                z10 = false;
            }
            i iVar3 = this.f40959b;
            if (iVar3 != null) {
                iVar3.e(1.0f, z10, z10);
            }
            this.f40958a.g().endRemovalTransition();
        }
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationRepeat(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationStart(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        if (this.f40961d == c.f40966d) {
            a();
            int i10 = d.f40972b[this.f40960c.ordinal()];
            boolean z10 = true;
            if (i10 != 1) {
                if (i10 == 2) {
                    i iVar = this.f40959b;
                    if (iVar != null) {
                        iVar.d();
                    }
                } else {
                    throw new qr.p();
                }
            } else {
                i iVar2 = this.f40959b;
                if (iVar2 != null) {
                    iVar2.c();
                }
            }
            if (this.f40960c != a.f40963e) {
                z10 = false;
            }
            i iVar3 = this.f40959b;
            if (iVar3 != null) {
                iVar3.e(0.0f, z10, z10);
            }
        }
    }
}
