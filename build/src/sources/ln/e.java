package ln;

import android.animation.Animator;
import com.swmansion.rnscreens.ScreenStackFragmentWrapper;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements Animator.AnimatorListener {

    /* renamed from: e  reason: collision with root package name */
    public static final b f36953e = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final ScreenStackFragmentWrapper f36954a;

    /* renamed from: b  reason: collision with root package name */
    private final i f36955b;

    /* renamed from: c  reason: collision with root package name */
    private final a f36956c;

    /* renamed from: d  reason: collision with root package name */
    private c f36957d;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        public static final a f36958d = new a("ENTER", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f36959e = new a("EXIT", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ a[] f36960i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f36961o;

        static {
            a[] a10 = a();
            f36960i = a10;
            f36961o = vr.a.a(a10);
        }

        private a(String str, int i10) {
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f36958d, f36959e};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f36960i.clone();
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
        public static final c f36962d = new c("INITIALIZED", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final c f36963e = new c("START_DISPATCHED", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final c f36964i = new c("END_DISPATCHED", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ c[] f36965o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f36966p;

        static {
            c[] a10 = a();
            f36965o = a10;
            f36966p = vr.a.a(a10);
        }

        private c(String str, int i10) {
        }

        private static final /* synthetic */ c[] a() {
            return new c[]{f36962d, f36963e, f36964i};
        }

        public static c valueOf(String str) {
            return (c) Enum.valueOf(c.class, str);
        }

        public static c[] values() {
            return (c[]) f36965o.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class d {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f36967a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f36968b;

        static {
            int[] iArr = new int[c.values().length];
            try {
                iArr[c.f36962d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[c.f36963e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[c.f36964i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f36967a = iArr;
            int[] iArr2 = new int[a.values().length];
            try {
                iArr2[a.f36958d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[a.f36959e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            f36968b = iArr2;
        }
    }

    public e(ScreenStackFragmentWrapper wrapper, i iVar, a animationType) {
        Intrinsics.checkNotNullParameter(wrapper, "wrapper");
        Intrinsics.checkNotNullParameter(animationType, "animationType");
        this.f36954a = wrapper;
        this.f36955b = iVar;
        this.f36956c = animationType;
        this.f36957d = c.f36962d;
    }

    private final void a() {
        c cVar;
        int i10 = d.f36967a[this.f36957d.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    cVar = c.f36964i;
                } else {
                    throw new or.p();
                }
            } else {
                cVar = c.f36964i;
            }
        } else {
            cVar = c.f36963e;
        }
        this.f36957d = cVar;
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationCancel(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationEnd(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        if (this.f36957d == c.f36963e) {
            a();
            animation.removeListener(this);
            int i10 = d.f36968b[this.f36956c.ordinal()];
            boolean z10 = true;
            if (i10 != 1) {
                if (i10 == 2) {
                    i iVar = this.f36955b;
                    if (iVar != null) {
                        iVar.b();
                    }
                } else {
                    throw new or.p();
                }
            } else {
                i iVar2 = this.f36955b;
                if (iVar2 != null) {
                    iVar2.a();
                }
            }
            if (this.f36956c != a.f36959e) {
                z10 = false;
            }
            i iVar3 = this.f36955b;
            if (iVar3 != null) {
                iVar3.e(1.0f, z10, z10);
            }
            this.f36954a.h().endRemovalTransition();
        }
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationRepeat(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationStart(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        if (this.f36957d == c.f36962d) {
            a();
            int i10 = d.f36968b[this.f36956c.ordinal()];
            boolean z10 = true;
            if (i10 != 1) {
                if (i10 == 2) {
                    i iVar = this.f36955b;
                    if (iVar != null) {
                        iVar.d();
                    }
                } else {
                    throw new or.p();
                }
            } else {
                i iVar2 = this.f36955b;
                if (iVar2 != null) {
                    iVar2.c();
                }
            }
            if (this.f36956c != a.f36959e) {
                z10 = false;
            }
            i iVar3 = this.f36955b;
            if (iVar3 != null) {
                iVar3.e(0.0f, z10, z10);
            }
        }
    }
}
