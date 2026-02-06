package nn;

import android.animation.Animator;
import com.swmansion.rnscreens.ScreenStackFragmentWrapper;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements Animator.AnimatorListener {

    /* renamed from: e  reason: collision with root package name */
    public static final b f40909e = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final ScreenStackFragmentWrapper f40910a;

    /* renamed from: b  reason: collision with root package name */
    private final i f40911b;

    /* renamed from: c  reason: collision with root package name */
    private final a f40912c;

    /* renamed from: d  reason: collision with root package name */
    private c f40913d;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        public static final a f40914d = new a("ENTER", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f40915e = new a("EXIT", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ a[] f40916i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f40917o;

        static {
            a[] a10 = a();
            f40916i = a10;
            f40917o = xr.a.a(a10);
        }

        private a(String str, int i10) {
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f40914d, f40915e};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f40916i.clone();
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
        public static final c f40918d = new c("INITIALIZED", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final c f40919e = new c("START_DISPATCHED", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final c f40920i = new c("END_DISPATCHED", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ c[] f40921o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f40922p;

        static {
            c[] a10 = a();
            f40921o = a10;
            f40922p = xr.a.a(a10);
        }

        private c(String str, int i10) {
        }

        private static final /* synthetic */ c[] a() {
            return new c[]{f40918d, f40919e, f40920i};
        }

        public static c valueOf(String str) {
            return (c) Enum.valueOf(c.class, str);
        }

        public static c[] values() {
            return (c[]) f40921o.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class d {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f40923a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f40924b;

        static {
            int[] iArr = new int[c.values().length];
            try {
                iArr[c.f40918d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[c.f40919e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[c.f40920i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f40923a = iArr;
            int[] iArr2 = new int[a.values().length];
            try {
                iArr2[a.f40914d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[a.f40915e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            f40924b = iArr2;
        }
    }

    public e(ScreenStackFragmentWrapper wrapper, i iVar, a animationType) {
        Intrinsics.checkNotNullParameter(wrapper, "wrapper");
        Intrinsics.checkNotNullParameter(animationType, "animationType");
        this.f40910a = wrapper;
        this.f40911b = iVar;
        this.f40912c = animationType;
        this.f40913d = c.f40918d;
    }

    private final void a() {
        c cVar;
        int i10 = d.f40923a[this.f40913d.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    cVar = c.f40920i;
                } else {
                    throw new qr.p();
                }
            } else {
                cVar = c.f40920i;
            }
        } else {
            cVar = c.f40919e;
        }
        this.f40913d = cVar;
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationCancel(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationEnd(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        if (this.f40913d == c.f40919e) {
            a();
            animation.removeListener(this);
            int i10 = d.f40924b[this.f40912c.ordinal()];
            boolean z10 = true;
            if (i10 != 1) {
                if (i10 == 2) {
                    i iVar = this.f40911b;
                    if (iVar != null) {
                        iVar.b();
                    }
                } else {
                    throw new qr.p();
                }
            } else {
                i iVar2 = this.f40911b;
                if (iVar2 != null) {
                    iVar2.a();
                }
            }
            if (this.f40912c != a.f40915e) {
                z10 = false;
            }
            i iVar3 = this.f40911b;
            if (iVar3 != null) {
                iVar3.e(1.0f, z10, z10);
            }
            this.f40910a.g().endRemovalTransition();
        }
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationRepeat(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationStart(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        if (this.f40913d == c.f40918d) {
            a();
            int i10 = d.f40924b[this.f40912c.ordinal()];
            boolean z10 = true;
            if (i10 != 1) {
                if (i10 == 2) {
                    i iVar = this.f40911b;
                    if (iVar != null) {
                        iVar.d();
                    }
                } else {
                    throw new qr.p();
                }
            } else {
                i iVar2 = this.f40911b;
                if (iVar2 != null) {
                    iVar2.c();
                }
            }
            if (this.f40912c != a.f40915e) {
                z10 = false;
            }
            i iVar3 = this.f40911b;
            if (iVar3 != null) {
                iVar3.e(0.0f, z10, z10);
            }
        }
    }
}
