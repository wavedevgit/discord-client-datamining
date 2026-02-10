package on;

import android.animation.Animator;
import com.swmansion.rnscreens.ScreenStackFragmentWrapper;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements Animator.AnimatorListener {

    /* renamed from: e  reason: collision with root package name */
    public static final b f42384e = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final ScreenStackFragmentWrapper f42385a;

    /* renamed from: b  reason: collision with root package name */
    private final i f42386b;

    /* renamed from: c  reason: collision with root package name */
    private final a f42387c;

    /* renamed from: d  reason: collision with root package name */
    private c f42388d;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        public static final a f42389d = new a("ENTER", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f42390e = new a("EXIT", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ a[] f42391i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f42392o;

        static {
            a[] a10 = a();
            f42391i = a10;
            f42392o = yr.a.a(a10);
        }

        private a(String str, int i10) {
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f42389d, f42390e};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f42391i.clone();
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
        public static final c f42393d = new c("INITIALIZED", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final c f42394e = new c("START_DISPATCHED", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final c f42395i = new c("END_DISPATCHED", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ c[] f42396o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f42397p;

        static {
            c[] a10 = a();
            f42396o = a10;
            f42397p = yr.a.a(a10);
        }

        private c(String str, int i10) {
        }

        private static final /* synthetic */ c[] a() {
            return new c[]{f42393d, f42394e, f42395i};
        }

        public static c valueOf(String str) {
            return (c) Enum.valueOf(c.class, str);
        }

        public static c[] values() {
            return (c[]) f42396o.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class d {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f42398a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f42399b;

        static {
            int[] iArr = new int[c.values().length];
            try {
                iArr[c.f42393d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[c.f42394e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[c.f42395i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f42398a = iArr;
            int[] iArr2 = new int[a.values().length];
            try {
                iArr2[a.f42389d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[a.f42390e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            f42399b = iArr2;
        }
    }

    public e(ScreenStackFragmentWrapper wrapper, i iVar, a animationType) {
        Intrinsics.checkNotNullParameter(wrapper, "wrapper");
        Intrinsics.checkNotNullParameter(animationType, "animationType");
        this.f42385a = wrapper;
        this.f42386b = iVar;
        this.f42387c = animationType;
        this.f42388d = c.f42393d;
    }

    private final void a() {
        c cVar;
        int i10 = d.f42398a[this.f42388d.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    cVar = c.f42395i;
                } else {
                    throw new rr.p();
                }
            } else {
                cVar = c.f42395i;
            }
        } else {
            cVar = c.f42394e;
        }
        this.f42388d = cVar;
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationCancel(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationEnd(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        if (this.f42388d == c.f42394e) {
            a();
            animation.removeListener(this);
            int i10 = d.f42399b[this.f42387c.ordinal()];
            boolean z10 = true;
            if (i10 != 1) {
                if (i10 == 2) {
                    i iVar = this.f42386b;
                    if (iVar != null) {
                        iVar.b();
                    }
                } else {
                    throw new rr.p();
                }
            } else {
                i iVar2 = this.f42386b;
                if (iVar2 != null) {
                    iVar2.a();
                }
            }
            if (this.f42387c != a.f42390e) {
                z10 = false;
            }
            i iVar3 = this.f42386b;
            if (iVar3 != null) {
                iVar3.e(1.0f, z10, z10);
            }
            this.f42385a.g().endRemovalTransition();
        }
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationRepeat(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationStart(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        if (this.f42388d == c.f42393d) {
            a();
            int i10 = d.f42399b[this.f42387c.ordinal()];
            boolean z10 = true;
            if (i10 != 1) {
                if (i10 == 2) {
                    i iVar = this.f42386b;
                    if (iVar != null) {
                        iVar.d();
                    }
                } else {
                    throw new rr.p();
                }
            } else {
                i iVar2 = this.f42386b;
                if (iVar2 != null) {
                    iVar2.c();
                }
            }
            if (this.f42387c != a.f42390e) {
                z10 = false;
            }
            i iVar3 = this.f42386b;
            if (iVar3 != null) {
                iVar3.e(0.0f, z10, z10);
            }
        }
    }
}
