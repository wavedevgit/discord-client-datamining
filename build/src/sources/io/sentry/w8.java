package io.sentry;

import java.lang.Thread;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
interface w8 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements w8 {

        /* renamed from: a  reason: collision with root package name */
        private static final a f30513a = new a();

        private a() {
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public static w8 c() {
            return f30513a;
        }

        @Override // io.sentry.w8
        public void a(Thread.UncaughtExceptionHandler uncaughtExceptionHandler) {
            Thread.setDefaultUncaughtExceptionHandler(uncaughtExceptionHandler);
        }

        @Override // io.sentry.w8
        public Thread.UncaughtExceptionHandler b() {
            return Thread.getDefaultUncaughtExceptionHandler();
        }
    }

    void a(Thread.UncaughtExceptionHandler uncaughtExceptionHandler);

    Thread.UncaughtExceptionHandler b();
}
