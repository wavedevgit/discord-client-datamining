package la;

import java.util.LinkedHashSet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final int f37124a;

    /* renamed from: b  reason: collision with root package name */
    private final LinkedHashSet f37125b;

    public d(int i10) {
        this.f37124a = i10;
        this.f37125b = new LinkedHashSet(i10);
    }

    public final synchronized boolean a(Object obj) {
        try {
            if (this.f37125b.size() == this.f37124a) {
                LinkedHashSet linkedHashSet = this.f37125b;
                linkedHashSet.remove(linkedHashSet.iterator().next());
            }
            this.f37125b.remove(obj);
        } catch (Throwable th2) {
            throw th2;
        }
        return this.f37125b.add(obj);
    }

    public final synchronized boolean b(Object obj) {
        return this.f37125b.contains(obj);
    }
}
