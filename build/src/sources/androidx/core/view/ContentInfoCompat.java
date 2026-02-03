package androidx.core.view;

import android.content.ClipData;
import android.content.ClipDescription;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.util.Pair;
import android.view.ContentInfo;
import androidx.core.util.Predicate;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ContentInfoCompat {

    /* renamed from: a  reason: collision with root package name */
    private final f f3227a;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface c {
        void a(Uri uri);

        void b(ClipData clipData);

        ContentInfoCompat build();

        void c(int i10);

        void setExtras(Bundle bundle);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e implements f {

        /* renamed from: a  reason: collision with root package name */
        private final ContentInfo f3235a;

        e(ContentInfo contentInfo) {
            this.f3235a = androidx.core.view.c.a(b2.e.g(contentInfo));
        }

        @Override // androidx.core.view.ContentInfoCompat.f
        public Uri a() {
            return this.f3235a.getLinkUri();
        }

        @Override // androidx.core.view.ContentInfoCompat.f
        public ContentInfo b() {
            return this.f3235a;
        }

        @Override // androidx.core.view.ContentInfoCompat.f
        public ClipData c() {
            return this.f3235a.getClip();
        }

        @Override // androidx.core.view.ContentInfoCompat.f
        public int d() {
            return this.f3235a.getFlags();
        }

        @Override // androidx.core.view.ContentInfoCompat.f
        public Bundle getExtras() {
            return this.f3235a.getExtras();
        }

        @Override // androidx.core.view.ContentInfoCompat.f
        public int getSource() {
            return this.f3235a.getSource();
        }

        public String toString() {
            return "ContentInfoCompat{" + this.f3235a + "}";
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface f {
        Uri a();

        ContentInfo b();

        ClipData c();

        int d();

        Bundle getExtras();

        int getSource();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class g implements f {

        /* renamed from: a  reason: collision with root package name */
        private final ClipData f3236a;

        /* renamed from: b  reason: collision with root package name */
        private final int f3237b;

        /* renamed from: c  reason: collision with root package name */
        private final int f3238c;

        /* renamed from: d  reason: collision with root package name */
        private final Uri f3239d;

        /* renamed from: e  reason: collision with root package name */
        private final Bundle f3240e;

        g(d dVar) {
            this.f3236a = (ClipData) b2.e.g(dVar.f3230a);
            this.f3237b = b2.e.c(dVar.f3231b, 0, 5, "source");
            this.f3238c = b2.e.f(dVar.f3232c, 1);
            this.f3239d = dVar.f3233d;
            this.f3240e = dVar.f3234e;
        }

        @Override // androidx.core.view.ContentInfoCompat.f
        public Uri a() {
            return this.f3239d;
        }

        @Override // androidx.core.view.ContentInfoCompat.f
        public ContentInfo b() {
            return null;
        }

        @Override // androidx.core.view.ContentInfoCompat.f
        public ClipData c() {
            return this.f3236a;
        }

        @Override // androidx.core.view.ContentInfoCompat.f
        public int d() {
            return this.f3238c;
        }

        @Override // androidx.core.view.ContentInfoCompat.f
        public Bundle getExtras() {
            return this.f3240e;
        }

        @Override // androidx.core.view.ContentInfoCompat.f
        public int getSource() {
            return this.f3237b;
        }

        public String toString() {
            String str;
            StringBuilder sb2 = new StringBuilder();
            sb2.append("ContentInfoCompat{clip=");
            sb2.append(this.f3236a.getDescription());
            sb2.append(", source=");
            sb2.append(ContentInfoCompat.j(this.f3237b));
            sb2.append(", flags=");
            sb2.append(ContentInfoCompat.b(this.f3238c));
            String str2 = "";
            if (this.f3239d == null) {
                str = "";
            } else {
                str = ", hasLinkUri(" + this.f3239d.toString().length() + ")";
            }
            sb2.append(str);
            if (this.f3240e != null) {
                str2 = ", hasExtras";
            }
            sb2.append(str2);
            sb2.append("}");
            return sb2.toString();
        }
    }

    ContentInfoCompat(f fVar) {
        this.f3227a = fVar;
    }

    static ClipData a(ClipDescription clipDescription, List list) {
        ClipData clipData = new ClipData(new ClipDescription(clipDescription), (ClipData.Item) list.get(0));
        for (int i10 = 1; i10 < list.size(); i10++) {
            clipData.addItem((ClipData.Item) list.get(i10));
        }
        return clipData;
    }

    static String b(int i10) {
        if ((i10 & 1) != 0) {
            return "FLAG_CONVERT_TO_PLAIN_TEXT";
        }
        return String.valueOf(i10);
    }

    static Pair h(ClipData clipData, Predicate predicate) {
        ArrayList arrayList = null;
        ArrayList arrayList2 = null;
        for (int i10 = 0; i10 < clipData.getItemCount(); i10++) {
            ClipData.Item itemAt = clipData.getItemAt(i10);
            if (predicate.test(itemAt)) {
                if (arrayList == null) {
                    arrayList = new ArrayList();
                }
                arrayList.add(itemAt);
            } else {
                if (arrayList2 == null) {
                    arrayList2 = new ArrayList();
                }
                arrayList2.add(itemAt);
            }
        }
        if (arrayList == null) {
            return Pair.create(null, clipData);
        }
        if (arrayList2 == null) {
            return Pair.create(clipData, null);
        }
        return Pair.create(a(clipData.getDescription(), arrayList), a(clipData.getDescription(), arrayList2));
    }

    static String j(int i10) {
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 != 4) {
                            if (i10 != 5) {
                                return String.valueOf(i10);
                            }
                            return "SOURCE_PROCESS_TEXT";
                        }
                        return "SOURCE_AUTOFILL";
                    }
                    return "SOURCE_DRAG_AND_DROP";
                }
                return "SOURCE_INPUT_METHOD";
            }
            return "SOURCE_CLIPBOARD";
        }
        return "SOURCE_APP";
    }

    public static ContentInfoCompat l(ContentInfo contentInfo) {
        return new ContentInfoCompat(new e(contentInfo));
    }

    public ClipData c() {
        return this.f3227a.c();
    }

    public Bundle d() {
        return this.f3227a.getExtras();
    }

    public int e() {
        return this.f3227a.d();
    }

    public Uri f() {
        return this.f3227a.a();
    }

    public int g() {
        return this.f3227a.getSource();
    }

    public Pair i(Predicate predicate) {
        ContentInfoCompat contentInfoCompat;
        ClipData c10 = this.f3227a.c();
        ContentInfoCompat contentInfoCompat2 = null;
        if (c10.getItemCount() == 1) {
            boolean test = predicate.test(c10.getItemAt(0));
            if (test) {
                contentInfoCompat = this;
            } else {
                contentInfoCompat = null;
            }
            if (!test) {
                contentInfoCompat2 = this;
            }
            return Pair.create(contentInfoCompat, contentInfoCompat2);
        }
        Pair h10 = h(c10, predicate);
        if (h10.first == null) {
            return Pair.create(null, this);
        }
        if (h10.second == null) {
            return Pair.create(this, null);
        }
        return Pair.create(new a(this).b((ClipData) h10.first).a(), new a(this).b((ClipData) h10.second).a());
    }

    public ContentInfo k() {
        ContentInfo b10 = this.f3227a.b();
        Objects.requireNonNull(b10);
        androidx.core.view.c.a(b10);
        return b10;
    }

    public String toString() {
        return this.f3227a.toString();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class b implements c {

        /* renamed from: a  reason: collision with root package name */
        private final ContentInfo.Builder f3229a;

        b(ClipData clipData, int i10) {
            this.f3229a = androidx.core.view.d.a(clipData, i10);
        }

        @Override // androidx.core.view.ContentInfoCompat.c
        public void a(Uri uri) {
            this.f3229a.setLinkUri(uri);
        }

        @Override // androidx.core.view.ContentInfoCompat.c
        public void b(ClipData clipData) {
            this.f3229a.setClip(clipData);
        }

        @Override // androidx.core.view.ContentInfoCompat.c
        public ContentInfoCompat build() {
            return new ContentInfoCompat(new e(this.f3229a.build()));
        }

        @Override // androidx.core.view.ContentInfoCompat.c
        public void c(int i10) {
            this.f3229a.setFlags(i10);
        }

        @Override // androidx.core.view.ContentInfoCompat.c
        public void setExtras(Bundle bundle) {
            this.f3229a.setExtras(bundle);
        }

        b(ContentInfoCompat contentInfoCompat) {
            androidx.core.view.f.a();
            this.f3229a = androidx.core.view.e.a(contentInfoCompat.k());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class d implements c {

        /* renamed from: a  reason: collision with root package name */
        ClipData f3230a;

        /* renamed from: b  reason: collision with root package name */
        int f3231b;

        /* renamed from: c  reason: collision with root package name */
        int f3232c;

        /* renamed from: d  reason: collision with root package name */
        Uri f3233d;

        /* renamed from: e  reason: collision with root package name */
        Bundle f3234e;

        d(ClipData clipData, int i10) {
            this.f3230a = clipData;
            this.f3231b = i10;
        }

        @Override // androidx.core.view.ContentInfoCompat.c
        public void a(Uri uri) {
            this.f3233d = uri;
        }

        @Override // androidx.core.view.ContentInfoCompat.c
        public void b(ClipData clipData) {
            this.f3230a = clipData;
        }

        @Override // androidx.core.view.ContentInfoCompat.c
        public ContentInfoCompat build() {
            return new ContentInfoCompat(new g(this));
        }

        @Override // androidx.core.view.ContentInfoCompat.c
        public void c(int i10) {
            this.f3232c = i10;
        }

        @Override // androidx.core.view.ContentInfoCompat.c
        public void setExtras(Bundle bundle) {
            this.f3234e = bundle;
        }

        d(ContentInfoCompat contentInfoCompat) {
            this.f3230a = contentInfoCompat.c();
            this.f3231b = contentInfoCompat.g();
            this.f3232c = contentInfoCompat.e();
            this.f3233d = contentInfoCompat.f();
            this.f3234e = contentInfoCompat.d();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final c f3228a;

        public a(ContentInfoCompat contentInfoCompat) {
            if (Build.VERSION.SDK_INT >= 31) {
                this.f3228a = new b(contentInfoCompat);
            } else {
                this.f3228a = new d(contentInfoCompat);
            }
        }

        public ContentInfoCompat a() {
            return this.f3228a.build();
        }

        public a b(ClipData clipData) {
            this.f3228a.b(clipData);
            return this;
        }

        public a c(Bundle bundle) {
            this.f3228a.setExtras(bundle);
            return this;
        }

        public a d(int i10) {
            this.f3228a.c(i10);
            return this;
        }

        public a e(Uri uri) {
            this.f3228a.a(uri);
            return this;
        }

        public a(ClipData clipData, int i10) {
            if (Build.VERSION.SDK_INT >= 31) {
                this.f3228a = new b(clipData, i10);
            } else {
                this.f3228a = new d(clipData, i10);
            }
        }
    }
}
