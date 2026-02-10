package qn;

import android.animation.Animator;
import com.swmansion.rnscreens.ScreenStackFragmentWrapper;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements Animator.AnimatorListener {

    /* renamed from: e  reason: collision with root package name */
    public static final b f45470e = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final ScreenStackFragmentWrapper f45471a;

    /* renamed from: b  reason: collision with root package name */
    private final i f45472b;

    /* renamed from: c  reason: collision with root package name */
    private final a f45473c;

    /* renamed from: d  reason: collision with root package name */
    private c f45474d;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        public static final a f45475d = new a("ENTER", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f45476e = new a("EXIT", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ a[] f45477i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f45478o;

        static {
            a[] a10 = a();
            f45477i = a10;
            f45478o = hs.a.a(a10);
        }

        private a(String str, int i10) {
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f45475d, f45476e};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f45477i.clone();
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
        public static final c f45479d = new c("INITIALIZED", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final c f45480e = new c("START_DISPATCHED", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final c f45481i = new c("END_DISPATCHED", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ c[] f45482o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f45483p;

        static {
            c[] a10 = a();
            f45482o = a10;
            f45483p = hs.a.a(a10);
        }

        private c(String str, int i10) {
        }

        private static final /* synthetic */ c[] a() {
            return new c[]{f45479d, f45480e, f45481i};
        }

        public static c valueOf(String str) {
            return (c) Enum.valueOf(c.class, str);
        }

        public static c[] values() {
            return (c[]) f45482o.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class d {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f45484a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f45485b;

        static {
            int[] iArr = new int[c.values().length];
            try {
                iArr[c.f45479d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[c.f45480e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[c.f45481i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f45484a = iArr;
            int[] iArr2 = new int[a.values().length];
            try {
                iArr2[a.f45475d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[a.f45476e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            f45485b = iArr2;
        }
    }

    public e(ScreenStackFragmentWrapper wrapper, i iVar, a animationType) {
        Intrinsics.checkNotNullParameter(wrapper, "wrapper");
        Intrinsics.checkNotNullParameter(animationType, "animationType");
        this.f45471a = wrapper;
        this.f45472b = iVar;
        this.f45473c = animationType;
        this.f45474d = c.f45479d;
    }

    private final void a() {
        c cVar;
        int i10 = d.f45484a[this.f45474d.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    cVar = c.f45481i;
                } else {
                    throw new as.p();
                }
            } else {
                cVar = c.f45481i;
            }
        } else {
            cVar = c.f45480e;
        }
        this.f45474d = cVar;
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationCancel(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationEnd(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        if (this.f45474d == c.f45480e) {
            a();
            animation.removeListener(this);
            int i10 = d.f45485b[this.f45473c.ordinal()];
            boolean z10 = true;
            if (i10 != 1) {
                if (i10 == 2) {
                    i iVar = this.f45472b;
                    if (iVar != null) {
                        iVar.b();
                    }
                } else {
                    throw new as.p();
                }
            } else {
                i iVar2 = this.f45472b;
                if (iVar2 != null) {
                    iVar2.a();
                }
            }
            if (this.f45473c != a.f45476e) {
                z10 = false;
            }
            i iVar3 = this.f45472b;
            if (iVar3 != null) {
                iVar3.e(1.0f, z10, z10);
            }
            this.f45471a.h().endRemovalTransition();
        }
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationRepeat(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationStart(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        if (this.f45474d == c.f45479d) {
            a();
            int i10 = d.f45485b[this.f45473c.ordinal()];
            boolean z10 = true;
            if (i10 != 1) {
                if (i10 == 2) {
                    i iVar = this.f45472b;
                    if (iVar != null) {
                        iVar.d();
                    }
                } else {
                    throw new as.p();
                }
            } else {
                i iVar2 = this.f45472b;
                if (iVar2 != null) {
                    iVar2.c();
                }
            }
            if (this.f45473c != a.f45476e) {
                z10 = false;
            }
            i iVar3 = this.f45472b;
            if (iVar3 != null) {
                iVar3.e(0.0f, z10, z10);
            }
        }
    }
}
