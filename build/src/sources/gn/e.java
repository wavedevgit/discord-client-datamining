package gn;

import android.animation.Animator;
import com.swmansion.rnscreens.ScreenStackFragmentWrapper;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements Animator.AnimatorListener {

    /* renamed from: e  reason: collision with root package name */
    public static final b f27149e = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final ScreenStackFragmentWrapper f27150a;

    /* renamed from: b  reason: collision with root package name */
    private final i f27151b;

    /* renamed from: c  reason: collision with root package name */
    private final a f27152c;

    /* renamed from: d  reason: collision with root package name */
    private c f27153d;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        public static final a f27154d = new a("ENTER", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f27155e = new a("EXIT", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ a[] f27156i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f27157o;

        static {
            a[] a10 = a();
            f27156i = a10;
            f27157o = qr.a.a(a10);
        }

        private a(String str, int i10) {
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f27154d, f27155e};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f27156i.clone();
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
        public static final c f27158d = new c("INITIALIZED", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final c f27159e = new c("START_DISPATCHED", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final c f27160i = new c("END_DISPATCHED", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ c[] f27161o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f27162p;

        static {
            c[] a10 = a();
            f27161o = a10;
            f27162p = qr.a.a(a10);
        }

        private c(String str, int i10) {
        }

        private static final /* synthetic */ c[] a() {
            return new c[]{f27158d, f27159e, f27160i};
        }

        public static c valueOf(String str) {
            return (c) Enum.valueOf(c.class, str);
        }

        public static c[] values() {
            return (c[]) f27161o.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class d {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f27163a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f27164b;

        static {
            int[] iArr = new int[c.values().length];
            try {
                iArr[c.f27158d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[c.f27159e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[c.f27160i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f27163a = iArr;
            int[] iArr2 = new int[a.values().length];
            try {
                iArr2[a.f27154d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[a.f27155e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            f27164b = iArr2;
        }
    }

    public e(ScreenStackFragmentWrapper wrapper, i iVar, a animationType) {
        Intrinsics.checkNotNullParameter(wrapper, "wrapper");
        Intrinsics.checkNotNullParameter(animationType, "animationType");
        this.f27150a = wrapper;
        this.f27151b = iVar;
        this.f27152c = animationType;
        this.f27153d = c.f27158d;
    }

    private final void a() {
        c cVar;
        int i10 = d.f27163a[this.f27153d.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    cVar = c.f27160i;
                } else {
                    throw new jr.p();
                }
            } else {
                cVar = c.f27160i;
            }
        } else {
            cVar = c.f27159e;
        }
        this.f27153d = cVar;
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationCancel(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationEnd(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        if (this.f27153d == c.f27159e) {
            a();
            animation.removeListener(this);
            int i10 = d.f27164b[this.f27152c.ordinal()];
            boolean z10 = true;
            if (i10 != 1) {
                if (i10 == 2) {
                    i iVar = this.f27151b;
                    if (iVar != null) {
                        iVar.b();
                    }
                } else {
                    throw new jr.p();
                }
            } else {
                i iVar2 = this.f27151b;
                if (iVar2 != null) {
                    iVar2.a();
                }
            }
            if (this.f27152c != a.f27155e) {
                z10 = false;
            }
            i iVar3 = this.f27151b;
            if (iVar3 != null) {
                iVar3.e(1.0f, z10, z10);
            }
            this.f27150a.h().endRemovalTransition();
        }
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationRepeat(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationStart(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        if (this.f27153d == c.f27158d) {
            a();
            int i10 = d.f27164b[this.f27152c.ordinal()];
            boolean z10 = true;
            if (i10 != 1) {
                if (i10 == 2) {
                    i iVar = this.f27151b;
                    if (iVar != null) {
                        iVar.d();
                    }
                } else {
                    throw new jr.p();
                }
            } else {
                i iVar2 = this.f27151b;
                if (iVar2 != null) {
                    iVar2.c();
                }
            }
            if (this.f27152c != a.f27155e) {
                z10 = false;
            }
            i iVar3 = this.f27151b;
            if (iVar3 != null) {
                iVar3.e(0.0f, z10, z10);
            }
        }
    }
}
