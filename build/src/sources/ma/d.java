package ma;

import java.util.LinkedHashSet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final int f36167a;

    /* renamed from: b  reason: collision with root package name */
    private final LinkedHashSet f36168b;

    public d(int i10) {
        this.f36167a = i10;
        this.f36168b = new LinkedHashSet(i10);
    }

    public final synchronized boolean a(Object obj) {
        try {
            if (this.f36168b.size() == this.f36167a) {
                LinkedHashSet linkedHashSet = this.f36168b;
                linkedHashSet.remove(linkedHashSet.iterator().next());
            }
            this.f36168b.remove(obj);
        } catch (Throwable th2) {
            throw th2;
        }
        return this.f36168b.add(obj);
    }

    public final synchronized boolean b(Object obj) {
        return this.f36168b.contains(obj);
    }
}
