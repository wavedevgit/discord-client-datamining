package io.sentry.util;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d0 {

    /* renamed from: a  reason: collision with root package name */
    private static final b f28995a = new b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static class b extends ThreadLocal {
        private b() {
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // java.lang.ThreadLocal
        /* renamed from: a */
        public b0 initialValue() {
            return new b0();
        }
    }

    public static b0 a() {
        return (b0) f28995a.get();
    }
}
