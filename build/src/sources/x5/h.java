package x5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private float f53464a;

    /* renamed from: b  reason: collision with root package name */
    private int f53465b;

    public void a(float f10) {
        float f11 = this.f53464a + f10;
        this.f53464a = f11;
        int i10 = this.f53465b + 1;
        this.f53465b = i10;
        if (i10 == Integer.MAX_VALUE) {
            this.f53464a = f11 / 2.0f;
            this.f53465b = i10 / 2;
        }
    }
}
