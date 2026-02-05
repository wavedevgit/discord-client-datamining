package kh;

import android.os.Build;
import android.view.View;
import android.window.BackEvent;
import android.window.OnBackAnimationCallback;
import android.window.OnBackInvokedCallback;
import android.window.OnBackInvokedDispatcher;
import androidx.activity.BackEventCompat;
import androidx.annotation.NonNull;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final d f31841a = a();

    /* renamed from: b  reason: collision with root package name */
    private final kh.b f31842b;

    /* renamed from: c  reason: collision with root package name */
    private final View f31843c;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b implements d {

        /* renamed from: a  reason: collision with root package name */
        private OnBackInvokedCallback f31844a;

        private b() {
        }

        @Override // kh.c.d
        public void a(@NonNull kh.b bVar, @NonNull View view, boolean z10) {
            OnBackInvokedDispatcher findOnBackInvokedDispatcher;
            int i10;
            if (this.f31844a != null || (findOnBackInvokedDispatcher = view.findOnBackInvokedDispatcher()) == null) {
                return;
            }
            OnBackInvokedCallback c10 = c(bVar);
            this.f31844a = c10;
            if (z10) {
                i10 = 1000000;
            } else {
                i10 = 0;
            }
            findOnBackInvokedDispatcher.registerOnBackInvokedCallback(i10, c10);
        }

        @Override // kh.c.d
        public void b(@NonNull View view) {
            OnBackInvokedDispatcher findOnBackInvokedDispatcher = view.findOnBackInvokedDispatcher();
            if (findOnBackInvokedDispatcher == null) {
                return;
            }
            findOnBackInvokedDispatcher.unregisterOnBackInvokedCallback(this.f31844a);
            this.f31844a = null;
        }

        OnBackInvokedCallback c(final kh.b bVar) {
            Objects.requireNonNull(bVar);
            return new OnBackInvokedCallback() { // from class: kh.d
                public final void onBackInvoked() {
                    b.this.d();
                }
            };
        }

        boolean d() {
            if (this.f31844a != null) {
                return true;
            }
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: kh.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class C0436c extends b {

        /* renamed from: kh.c$c$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        class a implements OnBackAnimationCallback {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ kh.b f31845a;

            a(kh.b bVar) {
                this.f31845a = bVar;
            }

            public void onBackCancelled() {
                if (!C0436c.this.d()) {
                    return;
                }
                this.f31845a.a();
            }

            public void onBackInvoked() {
                this.f31845a.d();
            }

            public void onBackProgressed(BackEvent backEvent) {
                if (!C0436c.this.d()) {
                    return;
                }
                this.f31845a.c(new BackEventCompat(backEvent));
            }

            public void onBackStarted(BackEvent backEvent) {
                if (!C0436c.this.d()) {
                    return;
                }
                this.f31845a.b(new BackEventCompat(backEvent));
            }
        }

        private C0436c() {
            super();
        }

        @Override // kh.c.b
        OnBackInvokedCallback c(kh.b bVar) {
            return new a(bVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface d {
        void a(kh.b bVar, View view, boolean z10);

        void b(View view);
    }

    public c(kh.b bVar, View view) {
        this.f31842b = bVar;
        this.f31843c = view;
    }

    private static d a() {
        int i10 = Build.VERSION.SDK_INT;
        if (i10 >= 34) {
            return new C0436c();
        }
        if (i10 < 33) {
            return null;
        }
        return new b();
    }

    private void c(boolean z10) {
        d dVar = this.f31841a;
        if (dVar != null) {
            dVar.a(this.f31842b, this.f31843c, z10);
        }
    }

    public void b() {
        c(false);
    }

    public void d() {
        d dVar = this.f31841a;
        if (dVar != null) {
            dVar.b(this.f31843c);
        }
    }
}
