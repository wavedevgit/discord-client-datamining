package la;

import java.util.LinkedHashSet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final int f35913a;

    /* renamed from: b  reason: collision with root package name */
    private final LinkedHashSet f35914b;

    public d(int i10) {
        this.f35913a = i10;
        this.f35914b = new LinkedHashSet(i10);
    }

    public final synchronized boolean a(Object obj) {
        try {
            if (this.f35914b.size() == this.f35913a) {
                LinkedHashSet linkedHashSet = this.f35914b;
                linkedHashSet.remove(linkedHashSet.iterator().next());
            }
            this.f35914b.remove(obj);
        } catch (Throwable th2) {
            throw th2;
        }
        return this.f35914b.add(obj);
    }

    public final synchronized boolean b(Object obj) {
        return this.f35914b.contains(obj);
    }
}
