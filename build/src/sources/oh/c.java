package oh;

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
    private final d f40086a = a();

    /* renamed from: b  reason: collision with root package name */
    private final oh.b f40087b;

    /* renamed from: c  reason: collision with root package name */
    private final View f40088c;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b implements d {

        /* renamed from: a  reason: collision with root package name */
        private OnBackInvokedCallback f40089a;

        private b() {
        }

        @Override // oh.c.d
        public void a(@NonNull oh.b bVar, @NonNull View view, boolean z10) {
            OnBackInvokedDispatcher findOnBackInvokedDispatcher;
            int i10;
            if (this.f40089a != null || (findOnBackInvokedDispatcher = view.findOnBackInvokedDispatcher()) == null) {
                return;
            }
            OnBackInvokedCallback c10 = c(bVar);
            this.f40089a = c10;
            if (z10) {
                i10 = 1000000;
            } else {
                i10 = 0;
            }
            findOnBackInvokedDispatcher.registerOnBackInvokedCallback(i10, c10);
        }

        @Override // oh.c.d
        public void b(@NonNull View view) {
            OnBackInvokedDispatcher findOnBackInvokedDispatcher;
            if (this.f40089a == null || (findOnBackInvokedDispatcher = view.findOnBackInvokedDispatcher()) == null) {
                return;
            }
            findOnBackInvokedDispatcher.unregisterOnBackInvokedCallback(this.f40089a);
            this.f40089a = null;
        }

        OnBackInvokedCallback c(final oh.b bVar) {
            Objects.requireNonNull(bVar);
            return new OnBackInvokedCallback() { // from class: oh.d
                public final void onBackInvoked() {
                    b.this.d();
                }
            };
        }

        boolean d() {
            if (this.f40089a != null) {
                return true;
            }
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: oh.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class C0551c extends b {

        /* renamed from: oh.c$c$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        class a implements OnBackAnimationCallback {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ oh.b f40090a;

            a(oh.b bVar) {
                this.f40090a = bVar;
            }

            public void onBackCancelled() {
                if (!C0551c.this.d()) {
                    return;
                }
                this.f40090a.a();
            }

            public void onBackInvoked() {
                this.f40090a.d();
            }

            public void onBackProgressed(BackEvent backEvent) {
                if (!C0551c.this.d()) {
                    return;
                }
                this.f40090a.c(new BackEventCompat(backEvent));
            }

            public void onBackStarted(BackEvent backEvent) {
                if (!C0551c.this.d()) {
                    return;
                }
                this.f40090a.b(new BackEventCompat(backEvent));
            }
        }

        private C0551c() {
            super();
        }

        @Override // oh.c.b
        OnBackInvokedCallback c(oh.b bVar) {
            return new a(bVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface d {
        void a(oh.b bVar, View view, boolean z10);

        void b(View view);
    }

    public c(oh.b bVar, View view) {
        this.f40087b = bVar;
        this.f40088c = view;
    }

    private static d a() {
        int i10 = Build.VERSION.SDK_INT;
        if (i10 >= 34) {
            return new C0551c();
        }
        if (i10 < 33) {
            return null;
        }
        return new b();
    }

    private void c(boolean z10) {
        d dVar = this.f40086a;
        if (dVar != null) {
            dVar.a(this.f40087b, this.f40088c, z10);
        }
    }

    public void b() {
        c(false);
    }

    public void d() {
        d dVar = this.f40086a;
        if (dVar != null) {
            dVar.b(this.f40088c);
        }
    }
}
