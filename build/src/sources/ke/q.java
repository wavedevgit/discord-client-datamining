package ke;

import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.audio.AudioAttributes;
import com.google.android.exoplayer2.v1;
import com.google.android.exoplayer2.w1;
import rd.r;
import rd.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class q {

    /* renamed from: a  reason: collision with root package name */
    private a f31721a;

    /* renamed from: b  reason: collision with root package name */
    private me.e f31722b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void a(v1 v1Var);

        void b();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final me.e b() {
        return (me.e) oe.a.i(this.f31722b);
    }

    public abstract w1.a c();

    public void d(a aVar, me.e eVar) {
        this.f31721a = aVar;
        this.f31722b = eVar;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void e() {
        a aVar = this.f31721a;
        if (aVar != null) {
            aVar.b();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void f(v1 v1Var) {
        a aVar = this.f31721a;
        if (aVar != null) {
            aVar.a(v1Var);
        }
    }

    public abstract boolean g();

    public abstract void h(Object obj);

    public void i() {
        this.f31721a = null;
        this.f31722b = null;
    }

    public abstract r j(w1[] w1VarArr, w0 w0Var, r.b bVar, Timeline timeline);

    public abstract void k(AudioAttributes audioAttributes);
}
