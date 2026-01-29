package fn;

import android.animation.Animator;
import com.swmansion.rnscreens.ScreenStackFragmentWrapper;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements Animator.AnimatorListener {

    /* renamed from: e  reason: collision with root package name */
    public static final b f25256e = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final ScreenStackFragmentWrapper f25257a;

    /* renamed from: b  reason: collision with root package name */
    private final i f25258b;

    /* renamed from: c  reason: collision with root package name */
    private final a f25259c;

    /* renamed from: d  reason: collision with root package name */
    private c f25260d;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        public static final a f25261d = new a("ENTER", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f25262e = new a("EXIT", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ a[] f25263i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f25264o;

        static {
            a[] a10 = a();
            f25263i = a10;
            f25264o = pr.a.a(a10);
        }

        private a(String str, int i10) {
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f25261d, f25262e};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f25263i.clone();
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
        public static final c f25265d = new c("INITIALIZED", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final c f25266e = new c("START_DISPATCHED", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final c f25267i = new c("END_DISPATCHED", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ c[] f25268o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f25269p;

        static {
            c[] a10 = a();
            f25268o = a10;
            f25269p = pr.a.a(a10);
        }

        private c(String str, int i10) {
        }

        private static final /* synthetic */ c[] a() {
            return new c[]{f25265d, f25266e, f25267i};
        }

        public static c valueOf(String str) {
            return (c) Enum.valueOf(c.class, str);
        }

        public static c[] values() {
            return (c[]) f25268o.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class d {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f25270a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f25271b;

        static {
            int[] iArr = new int[c.values().length];
            try {
                iArr[c.f25265d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[c.f25266e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[c.f25267i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f25270a = iArr;
            int[] iArr2 = new int[a.values().length];
            try {
                iArr2[a.f25261d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[a.f25262e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            f25271b = iArr2;
        }
    }

    public e(ScreenStackFragmentWrapper wrapper, i iVar, a animationType) {
        Intrinsics.checkNotNullParameter(wrapper, "wrapper");
        Intrinsics.checkNotNullParameter(animationType, "animationType");
        this.f25257a = wrapper;
        this.f25258b = iVar;
        this.f25259c = animationType;
        this.f25260d = c.f25265d;
    }

    private final void a() {
        c cVar;
        int i10 = d.f25270a[this.f25260d.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    cVar = c.f25267i;
                } else {
                    throw new ir.p();
                }
            } else {
                cVar = c.f25267i;
            }
        } else {
            cVar = c.f25266e;
        }
        this.f25260d = cVar;
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationCancel(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationEnd(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        if (this.f25260d == c.f25266e) {
            a();
            animation.removeListener(this);
            int i10 = d.f25271b[this.f25259c.ordinal()];
            boolean z10 = true;
            if (i10 != 1) {
                if (i10 == 2) {
                    i iVar = this.f25258b;
                    if (iVar != null) {
                        iVar.b();
                    }
                } else {
                    throw new ir.p();
                }
            } else {
                i iVar2 = this.f25258b;
                if (iVar2 != null) {
                    iVar2.a();
                }
            }
            if (this.f25259c != a.f25262e) {
                z10 = false;
            }
            i iVar3 = this.f25258b;
            if (iVar3 != null) {
                iVar3.e(1.0f, z10, z10);
            }
            this.f25257a.h().endRemovalTransition();
        }
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationRepeat(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationStart(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        if (this.f25260d == c.f25265d) {
            a();
            int i10 = d.f25271b[this.f25259c.ordinal()];
            boolean z10 = true;
            if (i10 != 1) {
                if (i10 == 2) {
                    i iVar = this.f25258b;
                    if (iVar != null) {
                        iVar.d();
                    }
                } else {
                    throw new ir.p();
                }
            } else {
                i iVar2 = this.f25258b;
                if (iVar2 != null) {
                    iVar2.c();
                }
            }
            if (this.f25259c != a.f25262e) {
                z10 = false;
            }
            i iVar3 = this.f25258b;
            if (iVar3 != null) {
                iVar3.e(0.0f, z10, z10);
            }
        }
    }
}
