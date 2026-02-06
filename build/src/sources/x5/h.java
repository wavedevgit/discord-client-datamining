package x5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h {

    /* renamed from: a  reason: collision with root package name */
    private float f54545a;

    /* renamed from: b  reason: collision with root package name */
    private int f54546b;

    public void a(float f10) {
        float f11 = this.f54545a + f10;
        this.f54545a = f11;
        int i10 = this.f54546b + 1;
        this.f54546b = i10;
        if (i10 == Integer.MAX_VALUE) {
            this.f54545a = f11 / 2.0f;
            this.f54546b = i10 / 2;
        }
    }
}
