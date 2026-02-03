package com.withpersona.sdk2.inquiry.selfie.view;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewPropertyAnimator;
import com.withpersona.sdk2.inquiry.selfie.view.Pi2CircleMaskView;
import fp.z0;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000V\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0007\n\u0000\n\u0002\u0010\t\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\r\n\u0002\u0018\u0002\n\u0002\b\b\u0018\u0000 /2\u00020\u0001:\u00010B'\b\u0007\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004\u0012\b\b\u0002\u0010\u0007\u001a\u00020\u0006¢\u0006\u0004\b\b\u0010\tJ\u000f\u0010\u000b\u001a\u00020\nH\u0002¢\u0006\u0004\b\u000b\u0010\fJ\u0017\u0010\u0010\u001a\u00020\u000f2\u0006\u0010\u000e\u001a\u00020\rH\u0002¢\u0006\u0004\b\u0010\u0010\u0011J\u0017\u0010\u0015\u001a\u00020\u00142\u0006\u0010\u0013\u001a\u00020\u0012H\u0014¢\u0006\u0004\b\u0015\u0010\u0016J\r\u0010\u0017\u001a\u00020\u0014¢\u0006\u0004\b\u0017\u0010\u0018J)\u0010\u001d\u001a\u00020\u00142\b\b\u0002\u0010\u001a\u001a\u00020\u00192\u0010\b\u0002\u0010\u001c\u001a\n\u0012\u0004\u0012\u00020\u0014\u0018\u00010\u001b¢\u0006\u0004\b\u001d\u0010\u001eJ\r\u0010\u001f\u001a\u00020\u0019¢\u0006\u0004\b\u001f\u0010 R\u0014\u0010\"\u001a\u00020\r8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010!R\u0014\u0010%\u001a\u00020\u00068\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b#\u0010$R\u0018\u0010(\u001a\u0004\u0018\u00010\n8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b&\u0010'R\u0016\u0010,\u001a\u00020)8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b*\u0010+R\u0016\u0010.\u001a\u00020)8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b-\u0010+¨\u00061"}, d2 = {"Lcom/withpersona/sdk2/inquiry/selfie/view/Pi2CircleMaskView;", "Landroid/view/View;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attrs", "", "defStyleAttr", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;I)V", "Landroid/graphics/Bitmap;", "c", "()Landroid/graphics/Bitmap;", "", "targetScaleX", "", "b", "(F)J", "Landroid/graphics/Canvas;", "canvas", "", "onDraw", "(Landroid/graphics/Canvas;)V", "h", "()V", "", "animated", "Lkotlin/Function0;", "onComplete", "d", "(ZLkotlin/jvm/functions/Function0;)V", "g", "()Z", "F", "size", "e", "I", "maskColor", "i", "Landroid/graphics/Bitmap;", "mask", "Landroid/graphics/Paint;", "o", "Landroid/graphics/Paint;", "paint", "p", "clearPaint", "q", "a", "selfie_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nPi2CircleMaskView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Pi2CircleMaskView.kt\ncom/withpersona/sdk2/inquiry/selfie/view/Pi2CircleMaskView\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,110:1\n1#2:111\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class Pi2CircleMaskView extends View {

    /* renamed from: q  reason: collision with root package name */
    public static final a f20077q = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final float f20078d;

    /* renamed from: e  reason: collision with root package name */
    private final int f20079e;

    /* renamed from: i  reason: collision with root package name */
    private Bitmap f20080i;

    /* renamed from: o  reason: collision with root package name */
    private Paint f20081o;

    /* renamed from: p  reason: collision with root package name */
    private Paint f20082p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public Pi2CircleMaskView(@NotNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0, 4, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    private final long b(float f10) {
        return yr.a.e((Math.abs(getScaleX() - f10) / 4.0f) * ((float) 500));
    }

    private final Bitmap c() {
        Bitmap bitmap = this.f20080i;
        if (bitmap != null) {
            bitmap = (bitmap.getWidth() == getWidth() && bitmap.getHeight() == getHeight()) ? null : null;
            if (bitmap != null) {
                return bitmap;
            }
        }
        Bitmap createBitmap = Bitmap.createBitmap(getWidth(), getHeight(), Bitmap.Config.ARGB_8888);
        Intrinsics.checkNotNullExpressionValue(createBitmap, "createBitmap(...)");
        Canvas canvas = new Canvas(createBitmap);
        canvas.drawColor(this.f20079e);
        canvas.drawCircle(canvas.getWidth() / 2.0f, canvas.getHeight() / 2.0f, this.f20078d * Math.min(canvas.getWidth(), canvas.getHeight()), this.f20082p);
        this.f20080i = createBitmap;
        return createBitmap;
    }

    public static /* synthetic */ void e(Pi2CircleMaskView pi2CircleMaskView, boolean z10, Function0 function0, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = true;
        }
        if ((i10 & 2) != 0) {
            function0 = null;
        }
        pi2CircleMaskView.d(z10, function0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void f(Function0 function0) {
        if (function0 != null) {
            function0.invoke();
        }
    }

    public final void d(boolean z10, final Function0 function0) {
        if (z10) {
            ViewPropertyAnimator animate = animate();
            animate.setDuration(b(1.0f));
            animate.scaleX(1.0f);
            animate.scaleY(1.0f);
            animate.withEndAction(new Runnable() { // from class: jp.n
                @Override // java.lang.Runnable
                public final void run() {
                    Pi2CircleMaskView.f(Function0.this);
                }
            });
            animate.start();
            return;
        }
        getAnimation().cancel();
        setScaleX(1.0f);
        setScaleY(1.0f);
        if (function0 != null) {
            function0.invoke();
        }
    }

    public final boolean g() {
        if (getScaleX() == 5.0f && getScaleY() == 5.0f) {
            return false;
        }
        return true;
    }

    public final void h() {
        if (getScaleX() == 5.0f && getScaleY() == 5.0f) {
            return;
        }
        ViewPropertyAnimator animate = animate();
        animate.setDuration(b(5.0f));
        animate.scaleX(5.0f);
        animate.scaleY(5.0f);
        animate.start();
    }

    @Override // android.view.View
    protected void onDraw(Canvas canvas) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        canvas.drawBitmap(c(), 0.0f, 0.0f, this.f20081o);
    }

    public /* synthetic */ Pi2CircleMaskView(Context context, AttributeSet attributeSet, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i11 & 2) != 0 ? null : attributeSet, (i11 & 4) != 0 ? 0 : i10);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public Pi2CircleMaskView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        Intrinsics.checkNotNullParameter(context, "context");
        this.f20081o = new Paint(7);
        Paint paint = new Paint(1);
        paint.setColor(0);
        paint.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.CLEAR));
        this.f20082p = paint;
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, z0.f25510a, i10, 0);
        Intrinsics.checkNotNullExpressionValue(obtainStyledAttributes, "obtainStyledAttributes(...)");
        try {
            this.f20078d = obtainStyledAttributes.getFloat(z0.f25511b, 0.4f);
            this.f20079e = obtainStyledAttributes.getColor(z0.f25512c, -16777216);
            obtainStyledAttributes.recycle();
            setWillNotDraw(false);
        } catch (Throwable th2) {
            obtainStyledAttributes.recycle();
            throw th2;
        }
    }
}
