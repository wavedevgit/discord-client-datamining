package h5;

import android.view.View;
import android.view.ViewGroup;
import android.view.ViewTreeObserver;
import h5.c;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlinx.coroutines.CancellableContinuation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface l extends j {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a implements Function1 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ ViewTreeObserver f25677e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ b f25678i;

        a(ViewTreeObserver viewTreeObserver, b bVar) {
            this.f25677e = viewTreeObserver;
            this.f25678i = bVar;
        }

        public final void a(Throwable th2) {
            l.this.e(this.f25677e, this.f25678i);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((Throwable) obj);
            return Unit.f31988a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b implements ViewTreeObserver.OnPreDrawListener {

        /* renamed from: d  reason: collision with root package name */
        private boolean f25679d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ ViewTreeObserver f25681i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f25682o;

        b(ViewTreeObserver viewTreeObserver, CancellableContinuation cancellableContinuation) {
            this.f25681i = viewTreeObserver;
            this.f25682o = cancellableContinuation;
        }

        @Override // android.view.ViewTreeObserver.OnPreDrawListener
        public boolean onPreDraw() {
            i size = l.this.getSize();
            if (size != null) {
                l.this.e(this.f25681i, this);
                if (!this.f25679d) {
                    this.f25679d = true;
                    this.f25682o.resumeWith(Result.b(size));
                }
            }
            return true;
        }
    }

    static /* synthetic */ Object b(l lVar, Continuation continuation) {
        i size = lVar.getSize();
        if (size != null) {
            return size;
        }
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(ur.b.c(continuation), 1);
        eVar.H();
        ViewTreeObserver viewTreeObserver = lVar.getView().getViewTreeObserver();
        b bVar = new b(viewTreeObserver, eVar);
        viewTreeObserver.addOnPreDrawListener(bVar);
        eVar.c(new a(viewTreeObserver, bVar));
        Object B = eVar.B();
        if (B == ur.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return B;
    }

    private default c c(int i10, int i11, int i12) {
        if (i10 == -2) {
            return c.b.f25658a;
        }
        int i13 = i10 - i12;
        if (i13 > 0) {
            return h5.a.a(i13);
        }
        int i14 = i11 - i12;
        if (i14 > 0) {
            return h5.a.a(i14);
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    default void e(ViewTreeObserver viewTreeObserver, ViewTreeObserver.OnPreDrawListener onPreDrawListener) {
        if (viewTreeObserver.isAlive()) {
            viewTreeObserver.removeOnPreDrawListener(onPreDrawListener);
        } else {
            getView().getViewTreeObserver().removeOnPreDrawListener(onPreDrawListener);
        }
    }

    private default c getHeight() {
        int i10;
        int i11;
        ViewGroup.LayoutParams layoutParams = getView().getLayoutParams();
        if (layoutParams != null) {
            i10 = layoutParams.height;
        } else {
            i10 = -1;
        }
        int height = getView().getHeight();
        if (f()) {
            i11 = getView().getPaddingTop() + getView().getPaddingBottom();
        } else {
            i11 = 0;
        }
        return c(i10, height, i11);
    }

    /* JADX INFO: Access modifiers changed from: private */
    default i getSize() {
        c height;
        c width = getWidth();
        if (width == null || (height = getHeight()) == null) {
            return null;
        }
        return new i(width, height);
    }

    private default c getWidth() {
        int i10;
        int i11;
        ViewGroup.LayoutParams layoutParams = getView().getLayoutParams();
        if (layoutParams != null) {
            i10 = layoutParams.width;
        } else {
            i10 = -1;
        }
        int width = getView().getWidth();
        if (f()) {
            i11 = getView().getPaddingLeft() + getView().getPaddingRight();
        } else {
            i11 = 0;
        }
        return c(i10, width, i11);
    }

    @Override // h5.j
    default Object a(Continuation continuation) {
        return b(this, continuation);
    }

    boolean f();

    View getView();
}
