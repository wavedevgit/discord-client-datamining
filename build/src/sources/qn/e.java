package qn;

import android.animation.Animator;
import com.swmansion.rnscreens.ScreenStackFragmentWrapper;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements Animator.AnimatorListener {

    /* renamed from: e  reason: collision with root package name */
    public static final b f46039e = new b(null);

    /* renamed from: a  reason: collision with root package name */
    private final ScreenStackFragmentWrapper f46040a;

    /* renamed from: b  reason: collision with root package name */
    private final i f46041b;

    /* renamed from: c  reason: collision with root package name */
    private final a f46042c;

    /* renamed from: d  reason: collision with root package name */
    private c f46043d;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        public static final a f46044d = new a("ENTER", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f46045e = new a("EXIT", 1);

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ a[] f46046i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f46047o;

        static {
            a[] a10 = a();
            f46046i = a10;
            f46047o = hs.a.a(a10);
        }

        private a(String str, int i10) {
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f46044d, f46045e};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f46046i.clone();
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
        public static final c f46048d = new c("INITIALIZED", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final c f46049e = new c("START_DISPATCHED", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final c f46050i = new c("END_DISPATCHED", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ c[] f46051o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f46052p;

        static {
            c[] a10 = a();
            f46051o = a10;
            f46052p = hs.a.a(a10);
        }

        private c(String str, int i10) {
        }

        private static final /* synthetic */ c[] a() {
            return new c[]{f46048d, f46049e, f46050i};
        }

        public static c valueOf(String str) {
            return (c) Enum.valueOf(c.class, str);
        }

        public static c[] values() {
            return (c[]) f46051o.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class d {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f46053a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f46054b;

        static {
            int[] iArr = new int[c.values().length];
            try {
                iArr[c.f46048d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[c.f46049e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[c.f46050i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f46053a = iArr;
            int[] iArr2 = new int[a.values().length];
            try {
                iArr2[a.f46044d.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr2[a.f46045e.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            f46054b = iArr2;
        }
    }

    public e(ScreenStackFragmentWrapper wrapper, i iVar, a animationType) {
        Intrinsics.checkNotNullParameter(wrapper, "wrapper");
        Intrinsics.checkNotNullParameter(animationType, "animationType");
        this.f46040a = wrapper;
        this.f46041b = iVar;
        this.f46042c = animationType;
        this.f46043d = c.f46048d;
    }

    private final void a() {
        c cVar;
        int i10 = d.f46053a[this.f46043d.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    cVar = c.f46050i;
                } else {
                    throw new as.p();
                }
            } else {
                cVar = c.f46050i;
            }
        } else {
            cVar = c.f46049e;
        }
        this.f46043d = cVar;
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationCancel(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationEnd(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        if (this.f46043d == c.f46049e) {
            a();
            animation.removeListener(this);
            int i10 = d.f46054b[this.f46042c.ordinal()];
            boolean z10 = true;
            if (i10 != 1) {
                if (i10 == 2) {
                    i iVar = this.f46041b;
                    if (iVar != null) {
                        iVar.b();
                    }
                } else {
                    throw new as.p();
                }
            } else {
                i iVar2 = this.f46041b;
                if (iVar2 != null) {
                    iVar2.a();
                }
            }
            if (this.f46042c != a.f46045e) {
                z10 = false;
            }
            i iVar3 = this.f46041b;
            if (iVar3 != null) {
                iVar3.e(1.0f, z10, z10);
            }
            this.f46040a.h().endRemovalTransition();
        }
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationRepeat(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
    }

    @Override // android.animation.Animator.AnimatorListener
    public void onAnimationStart(Animator animation) {
        Intrinsics.checkNotNullParameter(animation, "animation");
        if (this.f46043d == c.f46048d) {
            a();
            int i10 = d.f46054b[this.f46042c.ordinal()];
            boolean z10 = true;
            if (i10 != 1) {
                if (i10 == 2) {
                    i iVar = this.f46041b;
                    if (iVar != null) {
                        iVar.d();
                    }
                } else {
                    throw new as.p();
                }
            } else {
                i iVar2 = this.f46041b;
                if (iVar2 != null) {
                    iVar2.c();
                }
            }
            if (this.f46042c != a.f46045e) {
                z10 = false;
            }
            i iVar3 = this.f46041b;
            if (iVar3 != null) {
                iVar3.e(0.0f, z10, z10);
            }
        }
    }
}
