package jh;

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
    private final d f32016a = a();

    /* renamed from: b  reason: collision with root package name */
    private final jh.b f32017b;

    /* renamed from: c  reason: collision with root package name */
    private final View f32018c;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b implements d {

        /* renamed from: a  reason: collision with root package name */
        private OnBackInvokedCallback f32019a;

        private b() {
        }

        @Override // jh.c.d
        public void a(@NonNull View view) {
            OnBackInvokedDispatcher findOnBackInvokedDispatcher = view.findOnBackInvokedDispatcher();
            if (findOnBackInvokedDispatcher == null) {
                return;
            }
            findOnBackInvokedDispatcher.unregisterOnBackInvokedCallback(this.f32019a);
            this.f32019a = null;
        }

        @Override // jh.c.d
        public void b(@NonNull jh.b bVar, @NonNull View view, boolean z10) {
            OnBackInvokedDispatcher findOnBackInvokedDispatcher;
            int i10;
            if (this.f32019a != null || (findOnBackInvokedDispatcher = view.findOnBackInvokedDispatcher()) == null) {
                return;
            }
            OnBackInvokedCallback c10 = c(bVar);
            this.f32019a = c10;
            if (z10) {
                i10 = 1000000;
            } else {
                i10 = 0;
            }
            findOnBackInvokedDispatcher.registerOnBackInvokedCallback(i10, c10);
        }

        OnBackInvokedCallback c(final jh.b bVar) {
            Objects.requireNonNull(bVar);
            return new OnBackInvokedCallback() { // from class: jh.d
                public final void onBackInvoked() {
                    b.this.d();
                }
            };
        }

        boolean d() {
            if (this.f32019a != null) {
                return true;
            }
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: jh.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class C0416c extends b {

        /* renamed from: jh.c$c$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        class a implements OnBackAnimationCallback {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ jh.b f32020a;

            a(jh.b bVar) {
                this.f32020a = bVar;
            }

            public void onBackCancelled() {
                if (!C0416c.this.d()) {
                    return;
                }
                this.f32020a.a();
            }

            public void onBackInvoked() {
                this.f32020a.d();
            }

            public void onBackProgressed(BackEvent backEvent) {
                if (!C0416c.this.d()) {
                    return;
                }
                this.f32020a.c(new BackEventCompat(backEvent));
            }

            public void onBackStarted(BackEvent backEvent) {
                if (!C0416c.this.d()) {
                    return;
                }
                this.f32020a.b(new BackEventCompat(backEvent));
            }
        }

        private C0416c() {
            super();
        }

        @Override // jh.c.b
        OnBackInvokedCallback c(jh.b bVar) {
            return new a(bVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface d {
        void a(View view);

        void b(jh.b bVar, View view, boolean z10);
    }

    public c(jh.b bVar, View view) {
        this.f32017b = bVar;
        this.f32018c = view;
    }

    private static d a() {
        int i10 = Build.VERSION.SDK_INT;
        if (i10 >= 34) {
            return new C0416c();
        }
        if (i10 < 33) {
            return null;
        }
        return new b();
    }

    private void c(boolean z10) {
        d dVar = this.f32016a;
        if (dVar != null) {
            dVar.b(this.f32017b, this.f32018c, z10);
        }
    }

    public void b() {
        c(false);
    }

    public void d() {
        d dVar = this.f32016a;
        if (dVar != null) {
            dVar.a(this.f32018c);
        }
    }
}
