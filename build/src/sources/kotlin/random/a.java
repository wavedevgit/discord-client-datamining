package kotlin.random;

import java.util.Random;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a extends c {
    @Override // kotlin.random.c
    public int b(int i10) {
        return d.e(g().nextInt(), i10);
    }

    @Override // kotlin.random.c
    public float c() {
        return g().nextFloat();
    }

    @Override // kotlin.random.c
    public int d() {
        return g().nextInt();
    }

    @Override // kotlin.random.c
    public int e(int i10) {
        return g().nextInt(i10);
    }

    public abstract Random g();
}
