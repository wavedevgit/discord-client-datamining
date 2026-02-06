package je;

import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.audio.AudioAttributes;
import com.google.android.exoplayer2.v1;
import com.google.android.exoplayer2.w1;
import qd.r;
import qd.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class q {

    /* renamed from: a  reason: collision with root package name */
    private a f29863a;

    /* renamed from: b  reason: collision with root package name */
    private le.e f29864b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void a(v1 v1Var);

        void b();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final le.e b() {
        return (le.e) ne.a.i(this.f29864b);
    }

    public abstract w1.a c();

    public void d(a aVar, le.e eVar) {
        this.f29863a = aVar;
        this.f29864b = eVar;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void e() {
        a aVar = this.f29863a;
        if (aVar != null) {
            aVar.b();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void f(v1 v1Var) {
        a aVar = this.f29863a;
        if (aVar != null) {
            aVar.a(v1Var);
        }
    }

    public abstract boolean g();

    public abstract void h(Object obj);

    public void i() {
        this.f29863a = null;
        this.f29864b = null;
    }

    public abstract r j(w1[] w1VarArr, w0 w0Var, r.b bVar, Timeline timeline);

    public abstract void k(AudioAttributes audioAttributes);
}
