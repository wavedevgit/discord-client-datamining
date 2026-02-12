package lr;

import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class i {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements h {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Provider f36004a;

        a(Provider provider) {
            this.f36004a = provider;
        }

        @Override // javax.inject.Provider
        public Object get() {
            return this.f36004a.get();
        }
    }

    public static h a(Provider provider) {
        g.b(provider);
        if (provider instanceof h) {
            return (h) provider;
        }
        return new a(provider);
    }
}
