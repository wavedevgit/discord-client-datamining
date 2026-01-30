package lj;

import gf.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends Exception {

    /* renamed from: d  reason: collision with root package name */
    private final int f37389d;

    public a(String str, int i10) {
        super(q.g(str, "Provided message must not be empty."));
        this.f37389d = i10;
    }

    public int a() {
        return this.f37389d;
    }

    public a(String str, int i10, Throwable th2) {
        super(q.g(str, "Provided message must not be empty."), th2);
        this.f37389d = i10;
    }
}
