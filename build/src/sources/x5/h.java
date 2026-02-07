package x5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private float f54593a;

    /* renamed from: b  reason: collision with root package name */
    private int f54594b;

    public void a(float f10) {
        float f11 = this.f54593a + f10;
        this.f54593a = f11;
        int i10 = this.f54594b + 1;
        this.f54594b = i10;
        if (i10 == Integer.MAX_VALUE) {
            this.f54593a = f11 / 2.0f;
            this.f54594b = i10 / 2;
        }
    }
}
