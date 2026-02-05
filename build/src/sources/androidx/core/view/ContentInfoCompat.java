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
    private final f f3339a;

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
        private final ContentInfo f3347a;

        e(ContentInfo contentInfo) {
            this.f3347a = androidx.core.view.c.a(b2.e.g(contentInfo));
        }

        @Override // androidx.core.view.ContentInfoCompat.f
        public Uri a() {
            return this.f3347a.getLinkUri();
        }

        @Override // androidx.core.view.ContentInfoCompat.f
        public ContentInfo b() {
            return this.f3347a;
        }

        @Override // androidx.core.view.ContentInfoCompat.f
        public ClipData c() {
            return this.f3347a.getClip();
        }

        @Override // androidx.core.view.ContentInfoCompat.f
        public int d() {
            return this.f3347a.getFlags();
        }

        @Override // androidx.core.view.ContentInfoCompat.f
        public Bundle getExtras() {
            return this.f3347a.getExtras();
        }

        @Override // androidx.core.view.ContentInfoCompat.f
        public int getSource() {
            return this.f3347a.getSource();
        }

        public String toString() {
            return "ContentInfoCompat{" + this.f3347a + "}";
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
        private final ClipData f3348a;

        /* renamed from: b  reason: collision with root package name */
        private final int f3349b;

        /* renamed from: c  reason: collision with root package name */
        private final int f3350c;

        /* renamed from: d  reason: collision with root package name */
        private final Uri f3351d;

        /* renamed from: e  reason: collision with root package name */
        private final Bundle f3352e;

        g(d dVar) {
            this.f3348a = (ClipData) b2.e.g(dVar.f3342a);
            this.f3349b = b2.e.c(dVar.f3343b, 0, 5, "source");
            this.f3350c = b2.e.f(dVar.f3344c, 1);
            this.f3351d = dVar.f3345d;
            this.f3352e = dVar.f3346e;
        }

        @Override // androidx.core.view.ContentInfoCompat.f
        public Uri a() {
            return this.f3351d;
        }

        @Override // androidx.core.view.ContentInfoCompat.f
        public ContentInfo b() {
            return null;
        }

        @Override // androidx.core.view.ContentInfoCompat.f
        public ClipData c() {
            return this.f3348a;
        }

        @Override // androidx.core.view.ContentInfoCompat.f
        public int d() {
            return this.f3350c;
        }

        @Override // androidx.core.view.ContentInfoCompat.f
        public Bundle getExtras() {
            return this.f3352e;
        }

        @Override // androidx.core.view.ContentInfoCompat.f
        public int getSource() {
            return this.f3349b;
        }

        public String toString() {
            String str;
            StringBuilder sb2 = new StringBuilder();
            sb2.append("ContentInfoCompat{clip=");
            sb2.append(this.f3348a.getDescription());
            sb2.append(", source=");
            sb2.append(ContentInfoCompat.j(this.f3349b));
            sb2.append(", flags=");
            sb2.append(ContentInfoCompat.b(this.f3350c));
            String str2 = "";
            if (this.f3351d == null) {
                str = "";
            } else {
                str = ", hasLinkUri(" + this.f3351d.toString().length() + ")";
            }
            sb2.append(str);
            if (this.f3352e != null) {
                str2 = ", hasExtras";
            }
            sb2.append(str2);
            sb2.append("}");
            return sb2.toString();
        }
    }

    ContentInfoCompat(f fVar) {
        this.f3339a = fVar;
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
        return this.f3339a.c();
    }

    public Bundle d() {
        return this.f3339a.getExtras();
    }

    public int e() {
        return this.f3339a.d();
    }

    public Uri f() {
        return this.f3339a.a();
    }

    public int g() {
        return this.f3339a.getSource();
    }

    public Pair i(Predicate predicate) {
        ContentInfoCompat contentInfoCompat;
        ClipData c10 = this.f3339a.c();
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
        ContentInfo b10 = this.f3339a.b();
        Objects.requireNonNull(b10);
        androidx.core.view.c.a(b10);
        return b10;
    }

    public String toString() {
        return this.f3339a.toString();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class b implements c {

        /* renamed from: a  reason: collision with root package name */
        private final ContentInfo.Builder f3341a;

        b(ClipData clipData, int i10) {
            this.f3341a = androidx.core.view.d.a(clipData, i10);
        }

        @Override // androidx.core.view.ContentInfoCompat.c
        public void a(Uri uri) {
            this.f3341a.setLinkUri(uri);
        }

        @Override // androidx.core.view.ContentInfoCompat.c
        public void b(ClipData clipData) {
            this.f3341a.setClip(clipData);
        }

        @Override // androidx.core.view.ContentInfoCompat.c
        public ContentInfoCompat build() {
            return new ContentInfoCompat(new e(this.f3341a.build()));
        }

        @Override // androidx.core.view.ContentInfoCompat.c
        public void c(int i10) {
            this.f3341a.setFlags(i10);
        }

        @Override // androidx.core.view.ContentInfoCompat.c
        public void setExtras(Bundle bundle) {
            this.f3341a.setExtras(bundle);
        }

        b(ContentInfoCompat contentInfoCompat) {
            androidx.core.view.f.a();
            this.f3341a = androidx.core.view.e.a(contentInfoCompat.k());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class d implements c {

        /* renamed from: a  reason: collision with root package name */
        ClipData f3342a;

        /* renamed from: b  reason: collision with root package name */
        int f3343b;

        /* renamed from: c  reason: collision with root package name */
        int f3344c;

        /* renamed from: d  reason: collision with root package name */
        Uri f3345d;

        /* renamed from: e  reason: collision with root package name */
        Bundle f3346e;

        d(ClipData clipData, int i10) {
            this.f3342a = clipData;
            this.f3343b = i10;
        }

        @Override // androidx.core.view.ContentInfoCompat.c
        public void a(Uri uri) {
            this.f3345d = uri;
        }

        @Override // androidx.core.view.ContentInfoCompat.c
        public void b(ClipData clipData) {
            this.f3342a = clipData;
        }

        @Override // androidx.core.view.ContentInfoCompat.c
        public ContentInfoCompat build() {
            return new ContentInfoCompat(new g(this));
        }

        @Override // androidx.core.view.ContentInfoCompat.c
        public void c(int i10) {
            this.f3344c = i10;
        }

        @Override // androidx.core.view.ContentInfoCompat.c
        public void setExtras(Bundle bundle) {
            this.f3346e = bundle;
        }

        d(ContentInfoCompat contentInfoCompat) {
            this.f3342a = contentInfoCompat.c();
            this.f3343b = contentInfoCompat.g();
            this.f3344c = contentInfoCompat.e();
            this.f3345d = contentInfoCompat.f();
            this.f3346e = contentInfoCompat.d();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final c f3340a;

        public a(ContentInfoCompat contentInfoCompat) {
            if (Build.VERSION.SDK_INT >= 31) {
                this.f3340a = new b(contentInfoCompat);
            } else {
                this.f3340a = new d(contentInfoCompat);
            }
        }

        public ContentInfoCompat a() {
            return this.f3340a.build();
        }

        public a b(ClipData clipData) {
            this.f3340a.b(clipData);
            return this;
        }

        public a c(Bundle bundle) {
            this.f3340a.setExtras(bundle);
            return this;
        }

        public a d(int i10) {
            this.f3340a.c(i10);
            return this;
        }

        public a e(Uri uri) {
            this.f3340a.a(uri);
            return this;
        }

        public a(ClipData clipData, int i10) {
            if (Build.VERSION.SDK_INT >= 31) {
                this.f3340a = new b(clipData, i10);
            } else {
                this.f3340a = new d(clipData, i10);
            }
        }
    }
}
