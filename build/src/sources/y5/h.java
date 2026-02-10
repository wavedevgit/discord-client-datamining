package y5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private float f55459a;

    /* renamed from: b  reason: collision with root package name */
    private int f55460b;

    public void a(float f10) {
        float f11 = this.f55459a + f10;
        this.f55459a = f11;
        int i10 = this.f55460b + 1;
        this.f55460b = i10;
        if (i10 == Integer.MAX_VALUE) {
            this.f55459a = f11 / 2.0f;
            this.f55460b = i10 / 2;
        }
    }
}
