package androidx.core.view;

import android.os.Build;
import android.view.ScrollFeedbackProvider;
import android.view.View;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class z {

    /* renamed from: a  reason: collision with root package name */
    private final d f3560a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class b implements d {

        /* renamed from: a  reason: collision with root package name */
        private final ScrollFeedbackProvider f3561a;

        b(View view) {
            this.f3561a = ScrollFeedbackProvider.createProvider(view);
        }

        @Override // androidx.core.view.z.d
        public void onScrollLimit(int i10, int i11, int i12, boolean z10) {
            this.f3561a.onScrollLimit(i10, i11, i12, z10);
        }

        @Override // androidx.core.view.z.d
        public void onScrollProgress(int i10, int i11, int i12, int i13) {
            this.f3561a.onScrollProgress(i10, i11, i12, i13);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class c implements d {
        private c() {
        }

        @Override // androidx.core.view.z.d
        public void onScrollLimit(int i10, int i11, int i12, boolean z10) {
        }

        @Override // androidx.core.view.z.d
        public void onScrollProgress(int i10, int i11, int i12, int i13) {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private interface d {
        void onScrollLimit(int i10, int i11, int i12, boolean z10);

        void onScrollProgress(int i10, int i11, int i12, int i13);
    }

    private z(View view) {
        if (Build.VERSION.SDK_INT >= 35) {
            this.f3560a = new b(view);
        } else {
            this.f3560a = new c();
        }
    }

    public static z a(View view) {
        return new z(view);
    }

    public void b(int i10, int i11, int i12, boolean z10) {
        this.f3560a.onScrollLimit(i10, i11, i12, z10);
    }

    public void c(int i10, int i11, int i12, int i13) {
        this.f3560a.onScrollProgress(i10, i11, i12, i13);
    }
}
