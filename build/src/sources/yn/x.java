package yn;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.MimeTypeMap;
import android.widget.ImageView;
import android.widget.TextView;
import androidx.recyclerview.widget.RecyclerView;
import androidx.recyclerview.widget.e;
import androidx.viewbinding.ViewBinding;
import com.google.android.material.progressindicator.CircularProgressIndicator;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import g5.h;
import java.io.File;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.IndexedValue;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import yn.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x extends RecyclerView.Adapter {

    /* renamed from: a  reason: collision with root package name */
    private final v4.h f55069a;

    /* renamed from: b  reason: collision with root package name */
    private final Function0 f55070b;

    /* renamed from: c  reason: collision with root package name */
    private final StepStyles.DocumentStepStyle f55071c;

    /* renamed from: d  reason: collision with root package name */
    private final LayoutInflater f55072d;

    /* renamed from: e  reason: collision with root package name */
    private List f55073e;

    /* renamed from: f  reason: collision with root package name */
    private Function1 f55074f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class a {

        /* renamed from: yn.x$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0766a extends a {
            public C0766a() {
                super(null);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static abstract class b extends a {

            /* renamed from: yn.x$a$b$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0767a extends b {

                /* renamed from: a  reason: collision with root package name */
                private final File f55075a;

                /* renamed from: b  reason: collision with root package name */
                private final d.a f55076b;

                /* renamed from: c  reason: collision with root package name */
                private final String f55077c;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                public C0767a(File file, d.a document, String str) {
                    super(null);
                    Intrinsics.checkNotNullParameter(file, "file");
                    Intrinsics.checkNotNullParameter(document, "document");
                    this.f55075a = file;
                    this.f55076b = document;
                    this.f55077c = str;
                }

                @Override // yn.x.a.b
                /* renamed from: b */
                public d.a a() {
                    return this.f55076b;
                }

                public final File c() {
                    return this.f55075a;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (!(obj instanceof C0767a)) {
                        return false;
                    }
                    C0767a c0767a = (C0767a) obj;
                    if (Intrinsics.areEqual(this.f55075a, c0767a.f55075a) && Intrinsics.areEqual(this.f55076b, c0767a.f55076b) && Intrinsics.areEqual(this.f55077c, c0767a.f55077c)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    int hashCode;
                    int hashCode2 = ((this.f55075a.hashCode() * 31) + this.f55076b.hashCode()) * 31;
                    String str = this.f55077c;
                    if (str == null) {
                        hashCode = 0;
                    } else {
                        hashCode = str.hashCode();
                    }
                    return hashCode2 + hashCode;
                }

                public String toString() {
                    File file = this.f55075a;
                    d.a aVar = this.f55076b;
                    String str = this.f55077c;
                    return "Local(file=" + file + ", document=" + aVar + ", mimeType=" + str + ")";
                }
            }

            /* renamed from: yn.x$a$b$b  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0768b extends b {

                /* renamed from: a  reason: collision with root package name */
                private final String f55078a;

                /* renamed from: b  reason: collision with root package name */
                private final String f55079b;

                /* renamed from: c  reason: collision with root package name */
                private final d.b f55080c;

                /* renamed from: d  reason: collision with root package name */
                private final String f55081d;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                public C0768b(String remoteUrl, String str, d.b document, String str2) {
                    super(null);
                    Intrinsics.checkNotNullParameter(remoteUrl, "remoteUrl");
                    Intrinsics.checkNotNullParameter(document, "document");
                    this.f55078a = remoteUrl;
                    this.f55079b = str;
                    this.f55080c = document;
                    this.f55081d = str2;
                }

                @Override // yn.x.a.b
                /* renamed from: b */
                public d.b a() {
                    return this.f55080c;
                }

                public final String c() {
                    return this.f55079b;
                }

                public String d() {
                    return this.f55081d;
                }

                public final String e() {
                    return this.f55078a;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (!(obj instanceof C0768b)) {
                        return false;
                    }
                    C0768b c0768b = (C0768b) obj;
                    if (Intrinsics.areEqual(this.f55078a, c0768b.f55078a) && Intrinsics.areEqual(this.f55079b, c0768b.f55079b) && Intrinsics.areEqual(this.f55080c, c0768b.f55080c) && Intrinsics.areEqual(this.f55081d, c0768b.f55081d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    int hashCode;
                    int hashCode2 = this.f55078a.hashCode() * 31;
                    String str = this.f55079b;
                    int i10 = 0;
                    if (str == null) {
                        hashCode = 0;
                    } else {
                        hashCode = str.hashCode();
                    }
                    int hashCode3 = (((hashCode2 + hashCode) * 31) + this.f55080c.hashCode()) * 31;
                    String str2 = this.f55081d;
                    if (str2 != null) {
                        i10 = str2.hashCode();
                    }
                    return hashCode3 + i10;
                }

                public String toString() {
                    String str = this.f55078a;
                    String str2 = this.f55079b;
                    d.b bVar = this.f55080c;
                    String str3 = this.f55081d;
                    return "Remote(remoteUrl=" + str + ", filename=" + str2 + ", document=" + bVar + ", mimeType=" + str3 + ")";
                }
            }

            public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            public abstract d a();

            private b() {
                super(null);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends e.b {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ List f55082a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ List f55083b;

        b(List list, List list2) {
            this.f55082a = list;
            this.f55083b = list2;
        }

        @Override // androidx.recyclerview.widget.e.b
        public boolean areContentsTheSame(int i10, int i11) {
            boolean z10;
            a aVar = (a) this.f55082a.get(i10);
            a aVar2 = (a) this.f55083b.get(i11);
            if (areItemsTheSame(i10, i11)) {
                if (aVar instanceof a.C0766a) {
                    z10 = Intrinsics.areEqual(aVar, aVar2);
                } else if (aVar instanceof a.b) {
                    z10 = true;
                } else {
                    throw new lr.p();
                }
                if (z10) {
                    return true;
                }
                return false;
            }
            return false;
        }

        @Override // androidx.recyclerview.widget.e.b
        public boolean areItemsTheSame(int i10, int i11) {
            a aVar = (a) this.f55082a.get(i10);
            a aVar2 = (a) this.f55083b.get(i11);
            if (aVar.getClass() != aVar2.getClass()) {
                return false;
            }
            if (aVar instanceof a.C0766a) {
                return true;
            }
            if (aVar instanceof a.b.C0767a) {
                String absolutePath = ((a.b.C0767a) aVar).c().getAbsolutePath();
                Intrinsics.checkNotNull(aVar2, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.document.DocumentTileAdapter.Item.DocumentItem.Local");
                return Intrinsics.areEqual(absolutePath, ((a.b.C0767a) aVar2).c().getAbsolutePath());
            } else if (aVar instanceof a.b.C0768b) {
                String e10 = ((a.b.C0768b) aVar).e();
                Intrinsics.checkNotNull(aVar2, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.document.DocumentTileAdapter.Item.DocumentItem.Remote");
                return Intrinsics.areEqual(e10, ((a.b.C0768b) aVar2).e());
            } else {
                throw new lr.p();
            }
        }

        @Override // androidx.recyclerview.widget.e.b
        public int getNewListSize() {
            return this.f55083b.size();
        }

        @Override // androidx.recyclerview.widget.e.b
        public int getOldListSize() {
            return this.f55082a.size();
        }
    }

    public x(Context context, v4.h imageLoader, Function0 onClickAddButton, StepStyles.DocumentStepStyle documentStepStyle) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(imageLoader, "imageLoader");
        Intrinsics.checkNotNullParameter(onClickAddButton, "onClickAddButton");
        this.f55069a = imageLoader;
        this.f55070b = onClickAddButton;
        this.f55071c = documentStepStyle;
        this.f55072d = LayoutInflater.from(context);
        this.f55073e = CollectionsKt.l();
    }

    private final void c(zn.b bVar) {
        StepStyles.DocumentStepStyle documentStepStyle = this.f55071c;
        if (documentStepStyle == null) {
            return;
        }
        Double imagePreviewBorderRadius = documentStepStyle.getImagePreviewBorderRadius();
        if (imagePreviewBorderRadius != null) {
            bVar.f56091c.setRadius((float) mp.h.a(imagePreviewBorderRadius.doubleValue()));
        }
        Double imagePreviewBorderWidth = this.f55071c.getImagePreviewBorderWidth();
        if (imagePreviewBorderWidth != null) {
            bVar.f56091c.setStrokeWidth((int) Math.ceil(mp.h.a(imagePreviewBorderWidth.doubleValue())));
        }
        Integer imagePreviewBorderColor = this.f55071c.getImagePreviewBorderColor();
        if (imagePreviewBorderColor != null) {
            bVar.f56091c.setStrokeColor(imagePreviewBorderColor.intValue());
        }
        Integer imagePreviewMainAreaFillColor = this.f55071c.getImagePreviewMainAreaFillColor();
        if (imagePreviewMainAreaFillColor != null) {
            bVar.f56090b.setBackgroundColor(imagePreviewMainAreaFillColor.intValue());
        }
        ThemeableLottieAnimationView addButton = bVar.f56090b;
        Intrinsics.checkNotNullExpressionValue(addButton, "addButton");
        fq.g.g(addButton, this.f55071c.getImagePreviewPlusIconStrokeColor(), this.f55071c.getImagePreviewPlusIconFillColor(), null, new String[]{"#FFFFFF"}, new String[]{"#5B3FD3"}, new String[0]);
    }

    private final void d(zn.d dVar) {
        StepStyles.DocumentStepStyle documentStepStyle = this.f55071c;
        if (documentStepStyle == null) {
            return;
        }
        Integer strokeColorValue = documentStepStyle.getStrokeColorValue();
        if (strokeColorValue != null) {
            dVar.f56107f.setIndicatorColor(strokeColorValue.intValue());
        }
        Integer fillColorValue = this.f55071c.getFillColorValue();
        if (fillColorValue != null) {
            dVar.f56107f.setTrackColor(fillColorValue.intValue());
        }
        Integer imagePreviewCropAreaFillColor = this.f55071c.getImagePreviewCropAreaFillColor();
        if (imagePreviewCropAreaFillColor != null) {
            dVar.f56105d.setBackgroundColor(imagePreviewCropAreaFillColor.intValue());
        }
        Double imagePreviewBorderRadius = this.f55071c.getImagePreviewBorderRadius();
        if (imagePreviewBorderRadius != null) {
            dVar.f56103b.setRadius((float) mp.h.a(imagePreviewBorderRadius.doubleValue()));
        }
        Double imagePreviewBorderWidth = this.f55071c.getImagePreviewBorderWidth();
        if (imagePreviewBorderWidth != null) {
            dVar.f56103b.setStrokeWidth((int) Math.ceil(mp.h.a(imagePreviewBorderWidth.doubleValue())));
        }
        Integer imagePreviewBorderColor = this.f55071c.getImagePreviewBorderColor();
        if (imagePreviewBorderColor != null) {
            dVar.f56103b.setStrokeColor(imagePreviewBorderColor.intValue());
        }
        TextBasedComponentStyle imageNameStyleValue = this.f55071c.getImageNameStyleValue();
        if (imageNameStyleValue != null) {
            TextView filenameView = dVar.f56104c;
            Intrinsics.checkNotNullExpressionValue(filenameView, "filenameView");
            fq.f0.n(filenameView, imageNameStyleValue, null, 2, null);
        }
        Integer imagePreviewMainAreaFillColor = this.f55071c.getImagePreviewMainAreaFillColor();
        if (imagePreviewMainAreaFillColor != null) {
            dVar.f56106e.setBackgroundColor(imagePreviewMainAreaFillColor.intValue());
        }
        ThemeableLottieAnimationView removeButton = dVar.f56108g;
        Intrinsics.checkNotNullExpressionValue(removeButton, "removeButton");
        fq.g.g(removeButton, this.f55071c.getImagePreviewXIconStrokeColor(), this.f55071c.getImagePreviewXIconFillColor(), null, new String[]{"#6B6D82"}, new String[]{"#FFFFFF"}, new String[0]);
    }

    private final List e(boolean z10, List list) {
        a c0768b;
        ArrayList arrayList = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            d dVar = (d) it.next();
            if (dVar instanceof d.a) {
                d.a aVar = (d.a) dVar;
                File file = new File(aVar.c());
                c0768b = new a.b.C0767a(file, aVar, MimeTypeMap.getSingleton().getMimeTypeFromExtension(wr.j.s(file)));
            } else if (dVar instanceof d.b) {
                d.b bVar = (d.b) dVar;
                c0768b = new a.b.C0768b(bVar.d(), bVar.c(), bVar, MimeTypeMap.getSingleton().getMimeTypeFromExtension(MimeTypeMap.getFileExtensionFromUrl(bVar.d())));
            } else {
                throw new lr.p();
            }
            arrayList.add(c0768b);
        }
        if (z10) {
            arrayList.add(new a.C0766a());
        }
        return arrayList;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void f(x xVar, View view) {
        xVar.f55070b.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void g(x xVar, a aVar, View view) {
        Function1 function1 = xVar.f55074f;
        if (function1 != null) {
            function1.invoke(((a.b) aVar).a());
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public int getItemCount() {
        return this.f55073e.size();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public int getItemViewType(int i10) {
        a aVar = (a) this.f55073e.get(i10);
        if (aVar instanceof a.C0766a) {
            return z2.f55119c;
        }
        if (aVar instanceof a.b) {
            return z2.f55120d;
        }
        throw new lr.p();
    }

    public final void h(Function1 function1) {
        this.f55074f = function1;
    }

    public final void i(boolean z10, List documents) {
        Intrinsics.checkNotNullParameter(documents, "documents");
        List e10 = e(z10, documents);
        List list = this.f55073e;
        e.C0067e b10 = androidx.recyclerview.widget.e.b(new b(list, e10));
        Intrinsics.checkNotNullExpressionValue(b10, "calculateDiff(...)");
        this.f55073e = e10;
        b10.c(this);
        List list2 = list;
        LinkedHashMap linkedHashMap = new LinkedHashMap(kotlin.ranges.d.d(kotlin.collections.o0.e(CollectionsKt.w(list2, 10)), 16));
        for (Object obj : list2) {
            linkedHashMap.put(obj, (a) obj);
        }
        for (IndexedValue indexedValue : CollectionsKt.n1(e10)) {
            int a10 = indexedValue.a();
            a aVar = (a) indexedValue.b();
            a aVar2 = (a) linkedHashMap.get(aVar);
            if ((aVar2 instanceof a.b.C0767a) && (aVar instanceof a.b.C0767a)) {
                a.b.C0767a c0767a = (a.b.C0767a) aVar;
                if (((a.b.C0767a) aVar2).a().e() != c0767a.a().e()) {
                    if (c0767a.a().e() == 100) {
                        notifyItemChanged(a10);
                    } else {
                        notifyItemChanged(a10, Unit.f32464a);
                    }
                }
            }
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public void onBindViewHolder(RecyclerView.ViewHolder holder, int i10) {
        int i11;
        Intrinsics.checkNotNullParameter(holder, "holder");
        final a aVar = (a) this.f55073e.get(i10);
        if (aVar instanceof a.C0766a) {
            ((zn.b) mp.c0.a(holder)).f56090b.setOnClickListener(new View.OnClickListener() { // from class: yn.v
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    x.f(x.this, view);
                }
            });
        } else if (aVar instanceof a.b) {
            zn.d dVar = (zn.d) mp.c0.a(holder);
            dVar.f56108g.setOnClickListener(new View.OnClickListener() { // from class: yn.w
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    x.g(x.this, aVar, view);
                }
            });
            ImageView imageView = dVar.f56105d;
            Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
            k5.l.a(imageView);
            dVar.f56105d.setImageDrawable(null);
            a.b bVar = (a.b) aVar;
            int i12 = 8;
            if (bVar instanceof a.b.C0767a) {
                ImageView imageView2 = dVar.f56105d;
                a.b.C0767a c0767a = (a.b.C0767a) aVar;
                if (c0767a.a().e() < 100) {
                    i11 = 4;
                } else {
                    i11 = 0;
                }
                imageView2.setVisibility(i11);
                dVar.f56108g.setVisibility(8);
                dVar.f56104c.setText(c0767a.c().getName());
                CircularProgressIndicator circularProgressIndicator = dVar.f56107f;
                if (c0767a.a().e() < 100) {
                    i12 = 0;
                }
                circularProgressIndicator.setVisibility(i12);
                dVar.f56107f.setProgress(c0767a.a().e());
            } else if (bVar instanceof a.b.C0768b) {
                dVar.f56105d.setVisibility(0);
                a.b.C0768b c0768b = (a.b.C0768b) aVar;
                if (Intrinsics.areEqual(c0768b.d(), "application/pdf")) {
                    ImageView imageView3 = dVar.f56105d;
                    Intrinsics.checkNotNullExpressionValue(imageView3, "imageView");
                    Integer valueOf = Integer.valueOf(mp.l.f38979l);
                    v4.h hVar = this.f55069a;
                    h.a r10 = new h.a(imageView3.getContext()).d(valueOf).r(imageView3);
                    r10.o(100, 100);
                    hVar.a(r10.a());
                } else {
                    ImageView imageView4 = dVar.f56105d;
                    Intrinsics.checkNotNullExpressionValue(imageView4, "imageView");
                    String e10 = c0768b.e();
                    v4.h hVar2 = this.f55069a;
                    h.a r11 = new h.a(imageView4.getContext()).d(e10).r(imageView4);
                    r11.c(true);
                    r11.b(100);
                    r11.o(500, 500);
                    hVar2.a(r11.a());
                }
                dVar.f56107f.setVisibility(8);
                dVar.f56108g.setVisibility(0);
                dVar.f56104c.setText(c0768b.c());
            } else {
                throw new lr.p();
            }
        } else {
            throw new lr.p();
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public RecyclerView.ViewHolder onCreateViewHolder(ViewGroup parent, int i10) {
        l5.i iVar;
        l5.i iVar2;
        Intrinsics.checkNotNullParameter(parent, "parent");
        View inflate = this.f55072d.inflate(i10, parent, false);
        if (i10 == z2.f55119c) {
            zn.b a10 = zn.b.a(inflate);
            Intrinsics.checkNotNullExpressionValue(a10, "bind(...)");
            mp.b0 b0Var = new mp.b0(a10);
            l5.b0 w10 = l5.s.w(((zn.b) b0Var.getBinding()).getRoot().getContext(), a3.f54724a);
            if (w10 != null && (iVar2 = (l5.i) w10.b()) != null) {
                ((zn.b) b0Var.getBinding()).f56090b.setComposition(iVar2);
            }
            ViewBinding binding = b0Var.getBinding();
            Intrinsics.checkNotNullExpressionValue(binding, "<get-binding>(...)");
            c((zn.b) binding);
            return b0Var;
        } else if (i10 == z2.f55120d) {
            zn.d a11 = zn.d.a(inflate);
            Intrinsics.checkNotNullExpressionValue(a11, "bind(...)");
            mp.b0 b0Var2 = new mp.b0(a11);
            l5.b0 w11 = l5.s.w(((zn.d) b0Var2.getBinding()).getRoot().getContext(), a3.f54725b);
            if (w11 != null && (iVar = (l5.i) w11.b()) != null) {
                ((zn.d) b0Var2.getBinding()).f56108g.setComposition(iVar);
            }
            ViewBinding binding2 = b0Var2.getBinding();
            Intrinsics.checkNotNullExpressionValue(binding2, "<get-binding>(...)");
            d((zn.d) binding2);
            return b0Var2;
        } else {
            throw new IllegalStateException(("Unknown view type " + i10).toString());
        }
    }
}
