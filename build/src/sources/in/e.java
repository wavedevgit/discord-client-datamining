package in;

import android.animation.Animator;
import com.swmansion.rnscreens.ScreenStackFragmentWrapper;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements Animator.AnimatorListener {

    /* renamed from: e  reason: collision with root package name */
    public static final b f28478e = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final ScreenStackFragmentWrapper f28479a;

    /* renamed from: b  reason: collision with root package name */
    private final i f28480b;

    /* renamed from: c  reason: collision with root package name */
    private final a f28481c;

    /* renamed from: d  reason: collision with root package name */
    private c f28482d;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        public static final a f28483d = new a("ENTER", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f28484e = new a("EXIT", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ a[] f28485i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f28486o;

        static {
            a[] a10 = a();
            f28485i = a10;
            f28486o = sr.a.a(a10);
        }

        private a(String str, int i10) {
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f28483d, f28484e};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f28485i.clone();
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
        public static final c f28487d = new c("INITIALIZED", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final c f28488e = new c("START_DISPATCHED", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final c f28489i = new c("END_DISPATCHED", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ c[] f28490o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f28491p;

        static {
            c[] a10 = a();
            f28490o = a10;
            f28491p = sr.a.a(a10);
        }

        private c(String str, int i10) {
        }

        private static final /* synthetic */ c[] a() {
            return new c[]{f28487d, f28488e, f28489i};
        }

        public static c valueOf(String str) {
            return (c) Enum.valueOf(c.class, str);
        }

        public static c[] values() {
            return (c[]) f28490o.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class d {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f28492a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f28493b;

        static {
            int[] iArr = new int[c.values().length];
            try {
                iArr[c.f28487d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[c.f28488e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[c.f28489i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f28492a = iArr;
            int[] iArr2 = new int[a.values().length];
            try {
                iArr2[a.f28483d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[a.f28484e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            f28493b = iArr2;
        }
    }

    public e(ScreenStackFragmentWrapper wrapper, i iVar, a animationType) {
        Intrinsics.checkNotNullParameter(wrapper, "wrapper");
        Intrinsics.checkNotNullParameter(animationType, "animationType");
        this.f28479a = wrapper;
        this.f28480b = iVar;
        this.f28481c = animationType;
        this.f28482d = c.f28487d;
    }

    private final void a() {
        c cVar;
        int i10 = d.f28492a[this.f28482d.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    cVar = c.f28489i;
                } else {
                    throw new lr.p();
                }
            } else {
                cVar = c.f28489i;
            }
        } else {
            cVar = c.f28488e;
        }
        this.f28482d = cVar;
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationCancel(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationEnd(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        if (this.f28482d == c.f28488e) {
            a();
            animation.removeListener(this);
            int i10 = d.f28493b[this.f28481c.ordinal()];
            boolean z10 = true;
            if (i10 != 1) {
                if (i10 == 2) {
                    i iVar = this.f28480b;
                    if (iVar != null) {
                        iVar.b();
                    }
                } else {
                    throw new lr.p();
                }
            } else {
                i iVar2 = this.f28480b;
                if (iVar2 != null) {
                    iVar2.a();
                }
            }
            if (this.f28481c != a.f28484e) {
                z10 = false;
            }
            i iVar3 = this.f28480b;
            if (iVar3 != null) {
                iVar3.e(1.0f, z10, z10);
            }
            this.f28479a.h().endRemovalTransition();
        }
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationRepeat(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationStart(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        if (this.f28482d == c.f28487d) {
            a();
            int i10 = d.f28493b[this.f28481c.ordinal()];
            boolean z10 = true;
            if (i10 != 1) {
                if (i10 == 2) {
                    i iVar = this.f28480b;
                    if (iVar != null) {
                        iVar.d();
                    }
                } else {
                    throw new lr.p();
                }
            } else {
                i iVar2 = this.f28480b;
                if (iVar2 != null) {
                    iVar2.c();
                }
            }
            if (this.f28481c != a.f28484e) {
                z10 = false;
            }
            i iVar3 = this.f28480b;
            if (iVar3 != null) {
                iVar3.e(0.0f, z10, z10);
            }
        }
    }
}
