package androidx.core.app;

import android.app.RemoteInput;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import java.util.HashSet;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class RemoteInput {

    /* renamed from: a  reason: collision with root package name */
    private final String f3050a;

    /* renamed from: b  reason: collision with root package name */
    private final CharSequence f3051b;

    /* renamed from: c  reason: collision with root package name */
    private final CharSequence[] f3052c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f3053d;

    /* renamed from: e  reason: collision with root package name */
    private final int f3054e;

    /* renamed from: f  reason: collision with root package name */
    private final Bundle f3055f;

    /* renamed from: g  reason: collision with root package name */
    private final Set f3056g;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {
        public static android.app.RemoteInput a(RemoteInput remoteInput) {
            Set<String> e10;
            RemoteInput.Builder addExtras = new RemoteInput.Builder(remoteInput.j()).setLabel(remoteInput.i()).setChoices(remoteInput.f()).setAllowFreeFormInput(remoteInput.d()).addExtras(remoteInput.h());
            if (Build.VERSION.SDK_INT >= 26 && (e10 = remoteInput.e()) != null) {
                for (String str : e10) {
                    b.b(addExtras, str, true);
                }
            }
            if (Build.VERSION.SDK_INT >= 29) {
                c.b(addExtras, remoteInput.g());
            }
            return addExtras.build();
        }

        static RemoteInput b(Object obj) {
            Set<String> a10;
            android.app.RemoteInput remoteInput = (android.app.RemoteInput) obj;
            d a11 = new d(remoteInput.getResultKey()).g(remoteInput.getLabel()).e(remoteInput.getChoices()).d(remoteInput.getAllowFreeFormInput()).a(remoteInput.getExtras());
            if (Build.VERSION.SDK_INT >= 26 && (a10 = b.a(remoteInput)) != null) {
                for (String str : a10) {
                    a11.c(str, true);
                }
            }
            if (Build.VERSION.SDK_INT >= 29) {
                a11.f(c.a(remoteInput));
            }
            return a11.b();
        }

        static Bundle c(Intent intent) {
            return android.app.RemoteInput.getResultsFromIntent(intent);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {
        static Set a(Object obj) {
            return ((android.app.RemoteInput) obj).getAllowedDataTypes();
        }

        static RemoteInput.Builder b(RemoteInput.Builder builder, String str, boolean z10) {
            return builder.setAllowDataType(str, z10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {
        static int a(Object obj) {
            return ((android.app.RemoteInput) obj).getEditChoicesBeforeSending();
        }

        static RemoteInput.Builder b(RemoteInput.Builder builder, int i10) {
            return builder.setEditChoicesBeforeSending(i10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d {

        /* renamed from: a  reason: collision with root package name */
        private final String f3057a;

        /* renamed from: d  reason: collision with root package name */
        private CharSequence f3060d;

        /* renamed from: e  reason: collision with root package name */
        private CharSequence[] f3061e;

        /* renamed from: b  reason: collision with root package name */
        private final Set f3058b = new HashSet();

        /* renamed from: c  reason: collision with root package name */
        private final Bundle f3059c = new Bundle();

        /* renamed from: f  reason: collision with root package name */
        private boolean f3062f = true;

        /* renamed from: g  reason: collision with root package name */
        private int f3063g = 0;

        public d(String str) {
            if (str != null) {
                this.f3057a = str;
                return;
            }
            throw new IllegalArgumentException("Result key can't be null");
        }

        public d a(Bundle bundle) {
            if (bundle != null) {
                this.f3059c.putAll(bundle);
            }
            return this;
        }

        public RemoteInput b() {
            return new RemoteInput(this.f3057a, this.f3060d, this.f3061e, this.f3062f, this.f3063g, this.f3059c, this.f3058b);
        }

        public d c(String str, boolean z10) {
            if (z10) {
                this.f3058b.add(str);
                return this;
            }
            this.f3058b.remove(str);
            return this;
        }

        public d d(boolean z10) {
            this.f3062f = z10;
            return this;
        }

        public d e(CharSequence[] charSequenceArr) {
            this.f3061e = charSequenceArr;
            return this;
        }

        public d f(int i10) {
            this.f3063g = i10;
            return this;
        }

        public d g(CharSequence charSequence) {
            this.f3060d = charSequence;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public RemoteInput(String str, CharSequence charSequence, CharSequence[] charSequenceArr, boolean z10, int i10, Bundle bundle, Set set) {
        this.f3050a = str;
        this.f3051b = charSequence;
        this.f3052c = charSequenceArr;
        this.f3053d = z10;
        this.f3054e = i10;
        this.f3055f = bundle;
        this.f3056g = set;
        if (g() == 2 && !d()) {
            throw new IllegalArgumentException("setEditChoicesBeforeSending requires setAllowFreeFormInput");
        }
    }

    static android.app.RemoteInput a(RemoteInput remoteInput) {
        return a.a(remoteInput);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static android.app.RemoteInput[] b(RemoteInput[] remoteInputArr) {
        if (remoteInputArr == null) {
            return null;
        }
        android.app.RemoteInput[] remoteInputArr2 = new android.app.RemoteInput[remoteInputArr.length];
        for (int i10 = 0; i10 < remoteInputArr.length; i10++) {
            remoteInputArr2[i10] = a(remoteInputArr[i10]);
        }
        return remoteInputArr2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static RemoteInput c(android.app.RemoteInput remoteInput) {
        return a.b(remoteInput);
    }

    public static Bundle k(Intent intent) {
        return a.c(intent);
    }

    public boolean d() {
        return this.f3053d;
    }

    public Set e() {
        return this.f3056g;
    }

    public CharSequence[] f() {
        return this.f3052c;
    }

    public int g() {
        return this.f3054e;
    }

    public Bundle h() {
        return this.f3055f;
    }

    public CharSequence i() {
        return this.f3051b;
    }

    public String j() {
        return this.f3050a;
    }

    public boolean l() {
        if (!d()) {
            if ((f() == null || f().length == 0) && e() != null && !e().isEmpty()) {
                return true;
            }
            return false;
        }
        return false;
    }
}
