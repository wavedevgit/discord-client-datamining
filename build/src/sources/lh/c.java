package lh;

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
    private final d f36234a = a();

    /* renamed from: b  reason: collision with root package name */
    private final lh.b f36235b;

    /* renamed from: c  reason: collision with root package name */
    private final View f36236c;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b implements d {

        /* renamed from: a  reason: collision with root package name */
        private OnBackInvokedCallback f36237a;

        private b() {
        }

        @Override // lh.c.d
        public void a(@NonNull View view) {
            OnBackInvokedDispatcher findOnBackInvokedDispatcher = view.findOnBackInvokedDispatcher();
            if (findOnBackInvokedDispatcher == null) {
                return;
            }
            findOnBackInvokedDispatcher.unregisterOnBackInvokedCallback(this.f36237a);
            this.f36237a = null;
        }

        @Override // lh.c.d
        public void b(@NonNull lh.b bVar, @NonNull View view, boolean z10) {
            OnBackInvokedDispatcher findOnBackInvokedDispatcher;
            int i10;
            if (this.f36237a != null || (findOnBackInvokedDispatcher = view.findOnBackInvokedDispatcher()) == null) {
                return;
            }
            OnBackInvokedCallback c10 = c(bVar);
            this.f36237a = c10;
            if (z10) {
                i10 = 1000000;
            } else {
                i10 = 0;
            }
            findOnBackInvokedDispatcher.registerOnBackInvokedCallback(i10, c10);
        }

        OnBackInvokedCallback c(final lh.b bVar) {
            Objects.requireNonNull(bVar);
            return new OnBackInvokedCallback() { // from class: lh.d
                public final void onBackInvoked() {
                    b.this.d();
                }
            };
        }

        boolean d() {
            if (this.f36237a != null) {
                return true;
            }
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: lh.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class C0483c extends b {

        /* renamed from: lh.c$c$a */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        class a implements OnBackAnimationCallback {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ lh.b f36238a;

            a(lh.b bVar) {
                this.f36238a = bVar;
            }

            public void onBackCancelled() {
                if (!C0483c.this.d()) {
                    return;
                }
                this.f36238a.a();
            }

            public void onBackInvoked() {
                this.f36238a.d();
            }

            public void onBackProgressed(BackEvent backEvent) {
                if (!C0483c.this.d()) {
                    return;
                }
                this.f36238a.c(new BackEventCompat(backEvent));
            }

            public void onBackStarted(BackEvent backEvent) {
                if (!C0483c.this.d()) {
                    return;
                }
                this.f36238a.b(new BackEventCompat(backEvent));
            }
        }

        private C0483c() {
            super();
        }

        @Override // lh.c.b
        OnBackInvokedCallback c(lh.b bVar) {
            return new a(bVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface d {
        void a(View view);

        void b(lh.b bVar, View view, boolean z10);
    }

    public c(lh.b bVar, View view) {
        this.f36235b = bVar;
        this.f36236c = view;
    }

    private static d a() {
        int i10 = Build.VERSION.SDK_INT;
        if (i10 >= 34) {
            return new C0483c();
        }
        if (i10 < 33) {
            return null;
        }
        return new b();
    }

    private void c(boolean z10) {
        d dVar = this.f36234a;
        if (dVar != null) {
            dVar.b(this.f36235b, this.f36236c, z10);
        }
    }

    public void b() {
        c(false);
    }

    public void d() {
        d dVar = this.f36234a;
        if (dVar != null) {
            dVar.a(this.f36236c);
        }
    }
}
