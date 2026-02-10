package mh;

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
    private final d f37112a = a();

    /* renamed from: b  reason: collision with root package name */
    private final mh.b f37113b;

    /* renamed from: c  reason: collision with root package name */
    private final View f37114c;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b implements d {

        /* renamed from: a  reason: collision with root package name */
        private OnBackInvokedCallback f37115a;

        private b() {
        }

        @Override // mh.c.d
        public void a(@NonNull View view) {
            OnBackInvokedDispatcher findOnBackInvokedDispatcher = view.findOnBackInvokedDispatcher();
            if (findOnBackInvokedDispatcher == null) {
                return;
            }
            findOnBackInvokedDispatcher.unregisterOnBackInvokedCallback(this.f37115a);
            this.f37115a = null;
        }

        @Override // mh.c.d
        public void b(@NonNull mh.b bVar, @NonNull View view, boolean z10) {
            OnBackInvokedDispatcher findOnBackInvokedDispatcher;
            int i10;
            if (this.f37115a != null || (findOnBackInvokedDispatcher = view.findOnBackInvokedDispatcher()) == null) {
                return;
            }
            OnBackInvokedCallback c10 = c(bVar);
            this.f37115a = c10;
            if (z10) {
                i10 = 1000000;
            } else {
                i10 = 0;
            }
            findOnBackInvokedDispatcher.registerOnBackInvokedCallback(i10, c10);
        }

        OnBackInvokedCallback c(final mh.b bVar) {
            Objects.requireNonNull(bVar);
            return new OnBackInvokedCallback() { // from class: mh.d
                public final void onBackInvoked() {
                    b.this.d();
                }
            };
        }

        boolean d() {
            if (this.f37115a != null) {
                return true;
            }
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: mh.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class C0535c extends b {

        /* renamed from: mh.c$c$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        class a implements OnBackAnimationCallback {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ mh.b f37116a;

            a(mh.b bVar) {
                this.f37116a = bVar;
            }

            public void onBackCancelled() {
                if (!C0535c.this.d()) {
                    return;
                }
                this.f37116a.a();
            }

            public void onBackInvoked() {
                this.f37116a.d();
            }

            public void onBackProgressed(BackEvent backEvent) {
                if (!C0535c.this.d()) {
                    return;
                }
                this.f37116a.c(new BackEventCompat(backEvent));
            }

            public void onBackStarted(BackEvent backEvent) {
                if (!C0535c.this.d()) {
                    return;
                }
                this.f37116a.b(new BackEventCompat(backEvent));
            }
        }

        private C0535c() {
            super();
        }

        @Override // mh.c.b
        OnBackInvokedCallback c(mh.b bVar) {
            return new a(bVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface d {
        void a(View view);

        void b(mh.b bVar, View view, boolean z10);
    }

    public c(mh.b bVar, View view) {
        this.f37113b = bVar;
        this.f37114c = view;
    }

    private static d a() {
        int i10 = Build.VERSION.SDK_INT;
        if (i10 >= 34) {
            return new C0535c();
        }
        if (i10 < 33) {
            return null;
        }
        return new b();
    }

    private void c(boolean z10) {
        d dVar = this.f37112a;
        if (dVar != null) {
            dVar.b(this.f37113b, this.f37114c, z10);
        }
    }

    public void b() {
        c(false);
    }

    public void d() {
        d dVar = this.f37112a;
        if (dVar != null) {
            dVar.a(this.f37114c);
        }
    }
}
