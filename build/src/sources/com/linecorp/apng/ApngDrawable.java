package com.linecorp.apng;

import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.drawable.Animatable;
import android.graphics.drawable.Drawable;
import android.view.animation.AnimationUtils;
import bs.c;
import com.linecorp.apng.ApngDrawable;
import com.linecorp.apng.decoder.Apng;
import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.collections.i;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ApngDrawable extends Drawable implements Animatable {
    public static final b D = new b(null);
    private long A;
    private Long B;
    private int C;

    /* renamed from: d  reason: collision with root package name */
    private a f17141d;

    /* renamed from: e  reason: collision with root package name */
    private final int f17142e;

    /* renamed from: i  reason: collision with root package name */
    private final int f17143i;

    /* renamed from: o  reason: collision with root package name */
    private final List f17144o;

    /* renamed from: p  reason: collision with root package name */
    private final int f17145p;

    /* renamed from: q  reason: collision with root package name */
    private final long f17146q;

    /* renamed from: r  reason: collision with root package name */
    private int f17147r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f17148s;

    /* renamed from: t  reason: collision with root package name */
    private final Paint f17149t;

    /* renamed from: u  reason: collision with root package name */
    private final List f17150u;

    /* renamed from: v  reason: collision with root package name */
    private final List f17151v;

    /* renamed from: w  reason: collision with root package name */
    private final int[] f17152w;

    /* renamed from: x  reason: collision with root package name */
    private int f17153x;

    /* renamed from: y  reason: collision with root package name */
    private int f17154y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f17155z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public static /* synthetic */ ApngDrawable c(b bVar, File file, Integer num, Integer num2, int i10, Object obj) {
            if ((i10 & 2) != 0) {
                num = null;
            }
            if ((i10 & 4) != 0) {
                num2 = null;
            }
            return bVar.a(file, num, num2);
        }

        public final ApngDrawable a(File file, Integer num, Integer num2) {
            Intrinsics.checkNotNullParameter(file, "file");
            BufferedInputStream bufferedInputStream = new BufferedInputStream(new FileInputStream(file), 8192);
            try {
                ApngDrawable b10 = ApngDrawable.D.b(bufferedInputStream, num, num2);
                c.a(bufferedInputStream, null);
                return b10;
            } finally {
            }
        }

        public final ApngDrawable b(InputStream stream, Integer num, Integer num2) {
            boolean z10;
            int width;
            int height;
            Intrinsics.checkNotNullParameter(stream, "stream");
            boolean z11 = true;
            int i10 = 0;
            if (num == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (num2 != null) {
                z11 = false;
            }
            if (!(z11 ^ z10)) {
                if (num != null && num.intValue() <= 0) {
                    throw new IllegalArgumentException(("Can not specify 0 or negative as width value. width = " + num).toString());
                } else if (num2 != null && num2.intValue() <= 0) {
                    throw new IllegalArgumentException(("Can not specify 0 or negative as height value. height = " + num2).toString());
                } else {
                    if (num == null && num2 == null) {
                        i10 = 160;
                    }
                    int i11 = i10;
                    Apng decode = Apng.Companion.decode(stream);
                    if (num != null) {
                        width = num.intValue();
                    } else {
                        width = decode.getWidth();
                    }
                    int i12 = width;
                    if (num2 != null) {
                        height = num2.intValue();
                    } else {
                        height = decode.getHeight();
                    }
                    return new ApngDrawable(new a(decode, i12, height, i11, null, 16, null));
                }
            }
            throw new IllegalArgumentException(("Can not specify only one side of size. width = " + num + ", height = " + num2).toString());
        }

        private b() {
        }
    }

    public ApngDrawable(a apngState) {
        Intrinsics.checkNotNullParameter(apngState, "apngState");
        this.f17141d = apngState;
        this.f17142e = apngState.c().getDuration();
        int frameCount = this.f17141d.c().getFrameCount();
        this.f17143i = frameCount;
        this.f17144o = i.P0(this.f17141d.c().getFrameDurations());
        int byteCount = this.f17141d.c().getByteCount();
        this.f17145p = byteCount;
        this.f17146q = this.f17141d.c().getAllFrameByteCount() + byteCount;
        this.f17147r = this.f17141d.c().getLoopCount();
        this.f17148s = this.f17141d.c().isRecycled();
        this.f17149t = new Paint(6);
        this.f17150u = new ArrayList();
        this.f17151v = new ArrayList();
        this.f17152w = new int[frameCount];
        this.f17153x = this.f17141d.f();
        this.f17154y = this.f17141d.e();
        this.C = 160;
        for (int i10 = 1; i10 < frameCount; i10++) {
            int[] iArr = this.f17152w;
            int i11 = i10 - 1;
            iArr[i10] = iArr[i11] + this.f17141d.c().getFrameDurations()[i11];
        }
        getBounds().set(0, 0, this.f17141d.f(), this.f17141d.e());
    }

    private final int a(int i10, int i11, long j10) {
        int i12;
        while (true) {
            i12 = (i10 + i11) / 2;
            int[] iArr = this.f17152w;
            int i13 = i12 + 1;
            if (iArr.length > i13 && j10 >= iArr[i13]) {
                i10 = i13;
            } else if (i10 == i11 || j10 >= iArr[i12]) {
                break;
            } else {
                i11 = i12;
            }
        }
        return i12;
    }

    private final boolean b() {
        if (this.f17147r == 0 || d() <= this.f17147r - 1) {
            return false;
        }
        return true;
    }

    private final int d() {
        int i10 = this.f17142e;
        if (i10 == 0) {
            return 0;
        }
        return (int) (this.A / i10);
    }

    private final boolean e() {
        if (this.f17147r == 0 || d() < this.f17147r - 1) {
            return true;
        }
        return false;
    }

    private final boolean f() {
        if (c() == 0) {
            return true;
        }
        return false;
    }

    private final boolean g() {
        if (d() == 0) {
            return true;
        }
        return false;
    }

    private final boolean h() {
        if (c() == this.f17143i - 1) {
            return true;
        }
        return false;
    }

    private final void i() {
        long longValue;
        boolean z10;
        int c10 = c();
        long longValue2 = ((Number) this.f17141d.d().invoke()).longValue();
        Long l10 = this.B;
        if (l10 == null) {
            longValue = this.A;
        } else {
            longValue = (this.A + longValue2) - l10.longValue();
        }
        this.A = longValue;
        this.B = Long.valueOf(longValue2);
        if (c() != c10) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (this.f17155z) {
            if (f() && g() && l10 == null) {
                for (androidx.vectordrawable.graphics.drawable.b bVar : CollectionsKt.h1(this.f17150u)) {
                    bVar.c(this);
                }
            } else if (h() && e() && z10) {
                Iterator it = CollectionsKt.h1(this.f17151v).iterator();
                if (it.hasNext()) {
                    android.support.v4.media.session.b.a(it.next());
                    d();
                    throw null;
                }
            }
        }
        if (b()) {
            this.f17155z = false;
            for (androidx.vectordrawable.graphics.drawable.b bVar2 : CollectionsKt.h1(this.f17150u)) {
                bVar2.b(this);
            }
        }
    }

    public final int c() {
        long j10;
        int i10;
        int i11 = this.f17142e;
        if (i11 == 0) {
            j10 = 0;
        } else {
            j10 = this.A % i11;
        }
        if (b()) {
            i10 = this.f17142e;
        } else {
            i10 = 0;
        }
        return a(0, this.f17143i - 1, j10 + i10);
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        if (this.f17155z) {
            i();
        }
        Apng c10 = this.f17141d.c();
        int c11 = c();
        Rect bounds = getBounds();
        Intrinsics.checkNotNullExpressionValue(bounds, "getBounds(...)");
        c10.drawWithIndex(c11, canvas, null, bounds, this.f17149t);
        if (this.f17155z) {
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable.ConstantState getConstantState() {
        return this.f17141d;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        return this.f17154y;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        return this.f17153x;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -2;
    }

    @Override // android.graphics.drawable.Animatable
    public boolean isRunning() {
        return this.f17155z;
    }

    public final void j() {
        this.f17141d.c().recycle();
    }

    public final void k(long j10) {
        if (j10 >= 0) {
            this.B = null;
            this.A = j10;
            invalidateSelf();
            return;
        }
        throw new IllegalArgumentException("positionMillis must be positive value");
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable mutate() {
        this.f17141d = new a(this.f17141d);
        return this;
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f17149t.setAlpha(i10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f17149t.setColorFilter(colorFilter);
    }

    @Override // android.graphics.drawable.Animatable
    public void start() {
        this.f17155z = true;
        this.B = null;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Animatable
    public void stop() {
        this.f17155z = false;
        invalidateSelf();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends Drawable.ConstantState {

        /* renamed from: a  reason: collision with root package name */
        private final Apng f17156a;

        /* renamed from: b  reason: collision with root package name */
        private final int f17157b;

        /* renamed from: c  reason: collision with root package name */
        private final int f17158c;

        /* renamed from: d  reason: collision with root package name */
        private final int f17159d;

        /* renamed from: e  reason: collision with root package name */
        private final Function0 f17160e;

        public /* synthetic */ a(Apng apng, int i10, int i11, int i12, Function0 function0, int i13, DefaultConstructorMarker defaultConstructorMarker) {
            this(apng, i10, i11, (i13 & 8) != 0 ? 0 : i12, (i13 & 16) != 0 ? new Function0() { // from class: kl.a
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    long b10;
                    b10 = ApngDrawable.a.b();
                    return Long.valueOf(b10);
                }
            } : function0);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final long b() {
            return AnimationUtils.currentAnimationTimeMillis();
        }

        public final Apng c() {
            return this.f17156a;
        }

        public final Function0 d() {
            return this.f17160e;
        }

        public final int e() {
            return this.f17158c;
        }

        public final int f() {
            return this.f17157b;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public int getChangingConfigurations() {
            return 0;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable() {
            return new ApngDrawable(new a(this));
        }

        public a(Apng apng, int i10, int i11, int i12, Function0 currentTimeProvider) {
            Intrinsics.checkNotNullParameter(apng, "apng");
            Intrinsics.checkNotNullParameter(currentTimeProvider, "currentTimeProvider");
            this.f17156a = apng;
            this.f17157b = i10;
            this.f17158c = i11;
            this.f17159d = i12;
            this.f17160e = currentTimeProvider;
        }

        /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
        public a(a apngState) {
            this(apngState.f17156a.copy(), apngState.f17157b, apngState.f17158c, apngState.f17159d, apngState.f17160e);
            Intrinsics.checkNotNullParameter(apngState, "apngState");
        }
    }
}
