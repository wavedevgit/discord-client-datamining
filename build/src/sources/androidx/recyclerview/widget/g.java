package androidx.recyclerview.widget;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.ValueAnimator;
import android.graphics.Canvas;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.StateListDrawable;
import android.view.MotionEvent;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.js_watchdog.JSWatchdogManagerKt;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class g extends RecyclerView.ItemDecoration implements RecyclerView.OnItemTouchListener {
    private static final int[] D = {16842919};
    private static final int[] E = new int[0];
    int A;
    private final Runnable B;
    private final RecyclerView.OnScrollListener C;

    /* renamed from: a  reason: collision with root package name */
    private final int f5033a;

    /* renamed from: b  reason: collision with root package name */
    private final int f5034b;

    /* renamed from: c  reason: collision with root package name */
    final StateListDrawable f5035c;

    /* renamed from: d  reason: collision with root package name */
    final Drawable f5036d;

    /* renamed from: e  reason: collision with root package name */
    private final int f5037e;

    /* renamed from: f  reason: collision with root package name */
    private final int f5038f;

    /* renamed from: g  reason: collision with root package name */
    private final StateListDrawable f5039g;

    /* renamed from: h  reason: collision with root package name */
    private final Drawable f5040h;

    /* renamed from: i  reason: collision with root package name */
    private final int f5041i;

    /* renamed from: j  reason: collision with root package name */
    private final int f5042j;

    /* renamed from: k  reason: collision with root package name */
    int f5043k;

    /* renamed from: l  reason: collision with root package name */
    int f5044l;

    /* renamed from: m  reason: collision with root package name */
    float f5045m;

    /* renamed from: n  reason: collision with root package name */
    int f5046n;

    /* renamed from: o  reason: collision with root package name */
    int f5047o;

    /* renamed from: p  reason: collision with root package name */
    float f5048p;

    /* renamed from: s  reason: collision with root package name */
    private RecyclerView f5051s;

    /* renamed from: z  reason: collision with root package name */
    final ValueAnimator f5058z;

    /* renamed from: q  reason: collision with root package name */
    private int f5049q = 0;

    /* renamed from: r  reason: collision with root package name */
    private int f5050r = 0;

    /* renamed from: t  reason: collision with root package name */
    private boolean f5052t = false;

    /* renamed from: u  reason: collision with root package name */
    private boolean f5053u = false;

    /* renamed from: v  reason: collision with root package name */
    private int f5054v = 0;

    /* renamed from: w  reason: collision with root package name */
    private int f5055w = 0;

    /* renamed from: x  reason: collision with root package name */
    private final int[] f5056x = new int[2];

    /* renamed from: y  reason: collision with root package name */
    private final int[] f5057y = new int[2];

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            g.this.f(500);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b extends RecyclerView.OnScrollListener {
        b() {
        }

        @Override // androidx.recyclerview.widget.RecyclerView.OnScrollListener
        public void onScrolled(RecyclerView recyclerView, int i10, int i11) {
            g.this.p(recyclerView.computeHorizontalScrollOffset(), recyclerView.computeVerticalScrollOffset());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private class c extends AnimatorListenerAdapter {

        /* renamed from: a  reason: collision with root package name */
        private boolean f5061a = false;

        c() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
            this.f5061a = true;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            if (this.f5061a) {
                this.f5061a = false;
            } else if (((Float) g.this.f5058z.getAnimatedValue()).floatValue() == 0.0f) {
                g gVar = g.this;
                gVar.A = 0;
                gVar.n(0);
            } else {
                g gVar2 = g.this;
                gVar2.A = 2;
                gVar2.k();
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private class d implements ValueAnimator.AnimatorUpdateListener {
        d() {
        }

        @Override // android.animation.ValueAnimator.AnimatorUpdateListener
        public void onAnimationUpdate(ValueAnimator valueAnimator) {
            int floatValue = (int) (((Float) valueAnimator.getAnimatedValue()).floatValue() * 255.0f);
            g.this.f5035c.setAlpha(floatValue);
            g.this.f5036d.setAlpha(floatValue);
            g.this.k();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(RecyclerView recyclerView, StateListDrawable stateListDrawable, Drawable drawable, StateListDrawable stateListDrawable2, Drawable drawable2, int i10, int i11, int i12) {
        ValueAnimator ofFloat = ValueAnimator.ofFloat(0.0f, 1.0f);
        this.f5058z = ofFloat;
        this.A = 0;
        this.B = new a();
        this.C = new b();
        this.f5035c = stateListDrawable;
        this.f5036d = drawable;
        this.f5039g = stateListDrawable2;
        this.f5040h = drawable2;
        this.f5037e = Math.max(i10, stateListDrawable.getIntrinsicWidth());
        this.f5038f = Math.max(i10, drawable.getIntrinsicWidth());
        this.f5041i = Math.max(i10, stateListDrawable2.getIntrinsicWidth());
        this.f5042j = Math.max(i10, drawable2.getIntrinsicWidth());
        this.f5033a = i11;
        this.f5034b = i12;
        stateListDrawable.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
        drawable.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
        ofFloat.addListener(new c());
        ofFloat.addUpdateListener(new d());
        attachToRecyclerView(recyclerView);
    }

    private void a() {
        this.f5051s.removeCallbacks(this.B);
    }

    private void b(Canvas canvas) {
        int i10 = this.f5050r;
        int i11 = this.f5041i;
        int i12 = i10 - i11;
        int i13 = this.f5047o;
        int i14 = this.f5046n;
        int i15 = i13 - (i14 / 2);
        this.f5039g.setBounds(0, 0, i14, i11);
        this.f5040h.setBounds(0, 0, this.f5049q, this.f5042j);
        canvas.translate(0.0f, i12);
        this.f5040h.draw(canvas);
        canvas.translate(i15, 0.0f);
        this.f5039g.draw(canvas);
        canvas.translate(-i15, -i12);
    }

    private void c(Canvas canvas) {
        int i10 = this.f5049q;
        int i11 = this.f5037e;
        int i12 = i10 - i11;
        int i13 = this.f5044l;
        int i14 = this.f5043k;
        int i15 = i13 - (i14 / 2);
        this.f5035c.setBounds(0, 0, i11, i14);
        this.f5036d.setBounds(0, 0, this.f5038f, this.f5050r);
        if (h()) {
            this.f5036d.draw(canvas);
            canvas.translate(this.f5037e, i15);
            canvas.scale(-1.0f, 1.0f);
            this.f5035c.draw(canvas);
            canvas.scale(-1.0f, 1.0f);
            canvas.translate(-this.f5037e, -i15);
            return;
        }
        canvas.translate(i12, 0.0f);
        this.f5036d.draw(canvas);
        canvas.translate(0.0f, i15);
        this.f5035c.draw(canvas);
        canvas.translate(-i12, -i15);
    }

    private int[] d() {
        int[] iArr = this.f5057y;
        int i10 = this.f5034b;
        iArr[0] = i10;
        iArr[1] = this.f5049q - i10;
        return iArr;
    }

    private void destroyCallbacks() {
        this.f5051s.removeItemDecoration(this);
        this.f5051s.removeOnItemTouchListener(this);
        this.f5051s.removeOnScrollListener(this.C);
        a();
    }

    private int[] e() {
        int[] iArr = this.f5056x;
        int i10 = this.f5034b;
        iArr[0] = i10;
        iArr[1] = this.f5050r - i10;
        return iArr;
    }

    private void g(float f10) {
        int[] d10 = d();
        float max = Math.max(d10[0], Math.min(d10[1], f10));
        if (Math.abs(this.f5047o - max) < 2.0f) {
            return;
        }
        int m10 = m(this.f5048p, max, d10, this.f5051s.computeHorizontalScrollRange(), this.f5051s.computeHorizontalScrollOffset(), this.f5049q);
        if (m10 != 0) {
            this.f5051s.scrollBy(m10, 0);
        }
        this.f5048p = max;
    }

    private boolean h() {
        if (this.f5051s.getLayoutDirection() == 1) {
            return true;
        }
        return false;
    }

    private void l(int i10) {
        a();
        this.f5051s.postDelayed(this.B, i10);
    }

    private int m(float f10, float f11, int[] iArr, int i10, int i11, int i12) {
        int i13 = iArr[1] - iArr[0];
        if (i13 == 0) {
            return 0;
        }
        int i14 = i10 - i12;
        int i15 = (int) (((f11 - f10) / i13) * i14);
        int i16 = i11 + i15;
        if (i16 >= i14 || i16 < 0) {
            return 0;
        }
        return i15;
    }

    private void q(float f10) {
        int[] e10 = e();
        float max = Math.max(e10[0], Math.min(e10[1], f10));
        if (Math.abs(this.f5044l - max) < 2.0f) {
            return;
        }
        int m10 = m(this.f5045m, max, e10, this.f5051s.computeVerticalScrollRange(), this.f5051s.computeVerticalScrollOffset(), this.f5050r);
        if (m10 != 0) {
            this.f5051s.scrollBy(0, m10);
        }
        this.f5045m = max;
    }

    private void setupCallbacks() {
        this.f5051s.addItemDecoration(this);
        this.f5051s.addOnItemTouchListener(this);
        this.f5051s.addOnScrollListener(this.C);
    }

    public void attachToRecyclerView(RecyclerView recyclerView) {
        RecyclerView recyclerView2 = this.f5051s;
        if (recyclerView2 != recyclerView) {
            if (recyclerView2 != null) {
                destroyCallbacks();
            }
            this.f5051s = recyclerView;
            if (recyclerView != null) {
                setupCallbacks();
            }
        }
    }

    void f(int i10) {
        int i11 = this.A;
        if (i11 != 1) {
            if (i11 != 2) {
                return;
            }
        } else {
            this.f5058z.cancel();
        }
        this.A = 3;
        ValueAnimator valueAnimator = this.f5058z;
        valueAnimator.setFloatValues(((Float) valueAnimator.getAnimatedValue()).floatValue(), 0.0f);
        this.f5058z.setDuration(i10);
        this.f5058z.start();
    }

    boolean i(float f10, float f11) {
        if (f11 >= this.f5050r - this.f5041i) {
            int i10 = this.f5047o;
            int i11 = this.f5046n;
            if (f10 >= i10 - (i11 / 2) && f10 <= i10 + (i11 / 2)) {
                return true;
            }
            return false;
        }
        return false;
    }

    boolean j(float f10, float f11) {
        if (h()) {
            if (f10 > this.f5037e) {
                return false;
            }
        } else if (f10 < this.f5049q - this.f5037e) {
            return false;
        }
        int i10 = this.f5044l;
        int i11 = this.f5043k;
        if (f11 >= i10 - (i11 / 2) && f11 <= i10 + (i11 / 2)) {
            return true;
        }
        return false;
    }

    void k() {
        this.f5051s.invalidate();
    }

    void n(int i10) {
        if (i10 == 2 && this.f5054v != 2) {
            this.f5035c.setState(D);
            a();
        }
        if (i10 == 0) {
            k();
        } else {
            o();
        }
        if (this.f5054v == 2 && i10 != 2) {
            this.f5035c.setState(E);
            l(1200);
        } else if (i10 == 1) {
            l(JSWatchdogManagerKt.FREEZE_CHECK_DELAY_MS);
        }
        this.f5054v = i10;
    }

    public void o() {
        int i10 = this.A;
        if (i10 != 0) {
            if (i10 != 3) {
                return;
            }
            this.f5058z.cancel();
        }
        this.A = 1;
        ValueAnimator valueAnimator = this.f5058z;
        valueAnimator.setFloatValues(((Float) valueAnimator.getAnimatedValue()).floatValue(), 1.0f);
        this.f5058z.setDuration(500L);
        this.f5058z.setStartDelay(0L);
        this.f5058z.start();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.ItemDecoration
    public void onDrawOver(Canvas canvas, RecyclerView recyclerView, RecyclerView.State state) {
        if (this.f5049q == this.f5051s.getWidth() && this.f5050r == this.f5051s.getHeight()) {
            if (this.A != 0) {
                if (this.f5052t) {
                    c(canvas);
                }
                if (this.f5053u) {
                    b(canvas);
                    return;
                }
                return;
            }
            return;
        }
        this.f5049q = this.f5051s.getWidth();
        this.f5050r = this.f5051s.getHeight();
        n(0);
    }

    @Override // androidx.recyclerview.widget.RecyclerView.OnItemTouchListener
    public boolean onInterceptTouchEvent(RecyclerView recyclerView, MotionEvent motionEvent) {
        int i10 = this.f5054v;
        if (i10 == 1) {
            boolean j10 = j(motionEvent.getX(), motionEvent.getY());
            boolean i11 = i(motionEvent.getX(), motionEvent.getY());
            if (motionEvent.getAction() != 0 || (!j10 && !i11)) {
                return false;
            }
            if (i11) {
                this.f5055w = 1;
                this.f5048p = (int) motionEvent.getX();
            } else if (j10) {
                this.f5055w = 2;
                this.f5045m = (int) motionEvent.getY();
            }
            n(2);
            return true;
        } else if (i10 != 2) {
            return false;
        } else {
            return true;
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.OnItemTouchListener
    public void onRequestDisallowInterceptTouchEvent(boolean z10) {
    }

    @Override // androidx.recyclerview.widget.RecyclerView.OnItemTouchListener
    public void onTouchEvent(RecyclerView recyclerView, MotionEvent motionEvent) {
        if (this.f5054v != 0) {
            if (motionEvent.getAction() == 0) {
                boolean j10 = j(motionEvent.getX(), motionEvent.getY());
                boolean i10 = i(motionEvent.getX(), motionEvent.getY());
                if (j10 || i10) {
                    if (i10) {
                        this.f5055w = 1;
                        this.f5048p = (int) motionEvent.getX();
                    } else if (j10) {
                        this.f5055w = 2;
                        this.f5045m = (int) motionEvent.getY();
                    }
                    n(2);
                }
            } else if (motionEvent.getAction() == 1 && this.f5054v == 2) {
                this.f5045m = 0.0f;
                this.f5048p = 0.0f;
                n(1);
                this.f5055w = 0;
            } else if (motionEvent.getAction() == 2 && this.f5054v == 2) {
                o();
                if (this.f5055w == 1) {
                    g(motionEvent.getX());
                }
                if (this.f5055w == 2) {
                    q(motionEvent.getY());
                }
            }
        }
    }

    void p(int i10, int i11) {
        boolean z10;
        boolean z11;
        int computeVerticalScrollRange = this.f5051s.computeVerticalScrollRange();
        int i12 = this.f5050r;
        if (computeVerticalScrollRange - i12 > 0 && i12 >= this.f5033a) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f5052t = z10;
        int computeHorizontalScrollRange = this.f5051s.computeHorizontalScrollRange();
        int i13 = this.f5049q;
        if (computeHorizontalScrollRange - i13 > 0 && i13 >= this.f5033a) {
            z11 = true;
        } else {
            z11 = false;
        }
        this.f5053u = z11;
        boolean z12 = this.f5052t;
        if (!z12 && !z11) {
            if (this.f5054v != 0) {
                n(0);
                return;
            }
            return;
        }
        if (z12) {
            float f10 = i12;
            this.f5044l = (int) ((f10 * (i11 + (f10 / 2.0f))) / computeVerticalScrollRange);
            this.f5043k = Math.min(i12, (i12 * i12) / computeVerticalScrollRange);
        }
        if (this.f5053u) {
            float f11 = i13;
            this.f5047o = (int) ((f11 * (i10 + (f11 / 2.0f))) / computeHorizontalScrollRange);
            this.f5046n = Math.min(i13, (i13 * i13) / computeHorizontalScrollRange);
        }
        int i14 = this.f5054v;
        if (i14 != 0 && i14 != 1) {
            return;
        }
        n(1);
    }
}
