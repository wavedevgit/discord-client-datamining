package fo;

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
import fo.d;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x extends RecyclerView.Adapter {

    /* renamed from: a  reason: collision with root package name */
    private final v4.h f23116a;

    /* renamed from: b  reason: collision with root package name */
    private final Function0 f23117b;

    /* renamed from: c  reason: collision with root package name */
    private final StepStyles.DocumentStepStyle f23118c;

    /* renamed from: d  reason: collision with root package name */
    private final LayoutInflater f23119d;

    /* renamed from: e  reason: collision with root package name */
    private List f23120e;

    /* renamed from: f  reason: collision with root package name */
    private Function1 f23121f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class a {

        /* renamed from: fo.x$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0349a extends a {
            public C0349a() {
                super(null);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static abstract class b extends a {

            /* renamed from: fo.x$a$b$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0350a extends b {

                /* renamed from: a  reason: collision with root package name */
                private final File f23122a;

                /* renamed from: b  reason: collision with root package name */
                private final d.a f23123b;

                /* renamed from: c  reason: collision with root package name */
                private final String f23124c;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                public C0350a(File file, d.a document, String str) {
                    super(null);
                    Intrinsics.checkNotNullParameter(file, "file");
                    Intrinsics.checkNotNullParameter(document, "document");
                    this.f23122a = file;
                    this.f23123b = document;
                    this.f23124c = str;
                }

                @Override // fo.x.a.b
                /* renamed from: b */
                public d.a a() {
                    return this.f23123b;
                }

                public final File c() {
                    return this.f23122a;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (!(obj instanceof C0350a)) {
                        return false;
                    }
                    C0350a c0350a = (C0350a) obj;
                    if (Intrinsics.areEqual(this.f23122a, c0350a.f23122a) && Intrinsics.areEqual(this.f23123b, c0350a.f23123b) && Intrinsics.areEqual(this.f23124c, c0350a.f23124c)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    int hashCode;
                    int hashCode2 = ((this.f23122a.hashCode() * 31) + this.f23123b.hashCode()) * 31;
                    String str = this.f23124c;
                    if (str == null) {
                        hashCode = 0;
                    } else {
                        hashCode = str.hashCode();
                    }
                    return hashCode2 + hashCode;
                }

                public String toString() {
                    File file = this.f23122a;
                    d.a aVar = this.f23123b;
                    String str = this.f23124c;
                    return "Local(file=" + file + ", document=" + aVar + ", mimeType=" + str + ")";
                }
            }

            /* renamed from: fo.x$a$b$b  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0351b extends b {

                /* renamed from: a  reason: collision with root package name */
                private final String f23125a;

                /* renamed from: b  reason: collision with root package name */
                private final String f23126b;

                /* renamed from: c  reason: collision with root package name */
                private final d.b f23127c;

                /* renamed from: d  reason: collision with root package name */
                private final String f23128d;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                public C0351b(String remoteUrl, String str, d.b document, String str2) {
                    super(null);
                    Intrinsics.checkNotNullParameter(remoteUrl, "remoteUrl");
                    Intrinsics.checkNotNullParameter(document, "document");
                    this.f23125a = remoteUrl;
                    this.f23126b = str;
                    this.f23127c = document;
                    this.f23128d = str2;
                }

                @Override // fo.x.a.b
                /* renamed from: b */
                public d.b a() {
                    return this.f23127c;
                }

                public final String c() {
                    return this.f23126b;
                }

                public String d() {
                    return this.f23128d;
                }

                public final String e() {
                    return this.f23125a;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (!(obj instanceof C0351b)) {
                        return false;
                    }
                    C0351b c0351b = (C0351b) obj;
                    if (Intrinsics.areEqual(this.f23125a, c0351b.f23125a) && Intrinsics.areEqual(this.f23126b, c0351b.f23126b) && Intrinsics.areEqual(this.f23127c, c0351b.f23127c) && Intrinsics.areEqual(this.f23128d, c0351b.f23128d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    int hashCode;
                    int hashCode2 = this.f23125a.hashCode() * 31;
                    String str = this.f23126b;
                    int i10 = 0;
                    if (str == null) {
                        hashCode = 0;
                    } else {
                        hashCode = str.hashCode();
                    }
                    int hashCode3 = (((hashCode2 + hashCode) * 31) + this.f23127c.hashCode()) * 31;
                    String str2 = this.f23128d;
                    if (str2 != null) {
                        i10 = str2.hashCode();
                    }
                    return hashCode3 + i10;
                }

                public String toString() {
                    String str = this.f23125a;
                    String str2 = this.f23126b;
                    d.b bVar = this.f23127c;
                    String str3 = this.f23128d;
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
        final /* synthetic */ List f23129a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ List f23130b;

        b(List list, List list2) {
            this.f23129a = list;
            this.f23130b = list2;
        }

        @Override // androidx.recyclerview.widget.e.b
        public boolean areContentsTheSame(int i10, int i11) {
            boolean z10;
            a aVar = (a) this.f23129a.get(i10);
            a aVar2 = (a) this.f23130b.get(i11);
            if (areItemsTheSame(i10, i11)) {
                if (aVar instanceof a.C0349a) {
                    z10 = Intrinsics.areEqual(aVar, aVar2);
                } else if (aVar instanceof a.b) {
                    z10 = true;
                } else {
                    throw new rr.p();
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
            a aVar = (a) this.f23129a.get(i10);
            a aVar2 = (a) this.f23130b.get(i11);
            if (aVar.getClass() != aVar2.getClass()) {
                return false;
            }
            if (aVar instanceof a.C0349a) {
                return true;
            }
            if (aVar instanceof a.b.C0350a) {
                String absolutePath = ((a.b.C0350a) aVar).c().getAbsolutePath();
                Intrinsics.checkNotNull(aVar2, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.document.DocumentTileAdapter.Item.DocumentItem.Local");
                return Intrinsics.areEqual(absolutePath, ((a.b.C0350a) aVar2).c().getAbsolutePath());
            } else if (aVar instanceof a.b.C0351b) {
                String e10 = ((a.b.C0351b) aVar).e();
                Intrinsics.checkNotNull(aVar2, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.document.DocumentTileAdapter.Item.DocumentItem.Remote");
                return Intrinsics.areEqual(e10, ((a.b.C0351b) aVar2).e());
            } else {
                throw new rr.p();
            }
        }

        @Override // androidx.recyclerview.widget.e.b
        public int getNewListSize() {
            return this.f23130b.size();
        }

        @Override // androidx.recyclerview.widget.e.b
        public int getOldListSize() {
            return this.f23129a.size();
        }
    }

    public x(Context context, v4.h imageLoader, Function0 onClickAddButton, StepStyles.DocumentStepStyle documentStepStyle) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(imageLoader, "imageLoader");
        Intrinsics.checkNotNullParameter(onClickAddButton, "onClickAddButton");
        this.f23116a = imageLoader;
        this.f23117b = onClickAddButton;
        this.f23118c = documentStepStyle;
        this.f23119d = LayoutInflater.from(context);
        this.f23120e = CollectionsKt.l();
    }

    private final void c(go.b bVar) {
        StepStyles.DocumentStepStyle documentStepStyle = this.f23118c;
        if (documentStepStyle == null) {
            return;
        }
        Double imagePreviewBorderRadius = documentStepStyle.getImagePreviewBorderRadius();
        if (imagePreviewBorderRadius != null) {
            bVar.f24462c.setRadius((float) sp.h.a(imagePreviewBorderRadius.doubleValue()));
        }
        Double imagePreviewBorderWidth = this.f23118c.getImagePreviewBorderWidth();
        if (imagePreviewBorderWidth != null) {
            bVar.f24462c.setStrokeWidth((int) Math.ceil(sp.h.a(imagePreviewBorderWidth.doubleValue())));
        }
        Integer imagePreviewBorderColor = this.f23118c.getImagePreviewBorderColor();
        if (imagePreviewBorderColor != null) {
            bVar.f24462c.setStrokeColor(imagePreviewBorderColor.intValue());
        }
        Integer imagePreviewMainAreaFillColor = this.f23118c.getImagePreviewMainAreaFillColor();
        if (imagePreviewMainAreaFillColor != null) {
            bVar.f24461b.setBackgroundColor(imagePreviewMainAreaFillColor.intValue());
        }
        ThemeableLottieAnimationView addButton = bVar.f24461b;
        Intrinsics.checkNotNullExpressionValue(addButton, "addButton");
        lq.g.g(addButton, this.f23118c.getImagePreviewPlusIconStrokeColor(), this.f23118c.getImagePreviewPlusIconFillColor(), null, new String[]{"#FFFFFF"}, new String[]{"#5B3FD3"}, new String[0]);
    }

    private final void d(go.d dVar) {
        StepStyles.DocumentStepStyle documentStepStyle = this.f23118c;
        if (documentStepStyle == null) {
            return;
        }
        Integer strokeColorValue = documentStepStyle.getStrokeColorValue();
        if (strokeColorValue != null) {
            dVar.f24478f.setIndicatorColor(strokeColorValue.intValue());
        }
        Integer fillColorValue = this.f23118c.getFillColorValue();
        if (fillColorValue != null) {
            dVar.f24478f.setTrackColor(fillColorValue.intValue());
        }
        Integer imagePreviewCropAreaFillColor = this.f23118c.getImagePreviewCropAreaFillColor();
        if (imagePreviewCropAreaFillColor != null) {
            dVar.f24476d.setBackgroundColor(imagePreviewCropAreaFillColor.intValue());
        }
        Double imagePreviewBorderRadius = this.f23118c.getImagePreviewBorderRadius();
        if (imagePreviewBorderRadius != null) {
            dVar.f24474b.setRadius((float) sp.h.a(imagePreviewBorderRadius.doubleValue()));
        }
        Double imagePreviewBorderWidth = this.f23118c.getImagePreviewBorderWidth();
        if (imagePreviewBorderWidth != null) {
            dVar.f24474b.setStrokeWidth((int) Math.ceil(sp.h.a(imagePreviewBorderWidth.doubleValue())));
        }
        Integer imagePreviewBorderColor = this.f23118c.getImagePreviewBorderColor();
        if (imagePreviewBorderColor != null) {
            dVar.f24474b.setStrokeColor(imagePreviewBorderColor.intValue());
        }
        TextBasedComponentStyle imageNameStyleValue = this.f23118c.getImageNameStyleValue();
        if (imageNameStyleValue != null) {
            TextView filenameView = dVar.f24475c;
            Intrinsics.checkNotNullExpressionValue(filenameView, "filenameView");
            lq.f0.n(filenameView, imageNameStyleValue, null, 2, null);
        }
        Integer imagePreviewMainAreaFillColor = this.f23118c.getImagePreviewMainAreaFillColor();
        if (imagePreviewMainAreaFillColor != null) {
            dVar.f24477e.setBackgroundColor(imagePreviewMainAreaFillColor.intValue());
        }
        ThemeableLottieAnimationView removeButton = dVar.f24479g;
        Intrinsics.checkNotNullExpressionValue(removeButton, "removeButton");
        lq.g.g(removeButton, this.f23118c.getImagePreviewXIconStrokeColor(), this.f23118c.getImagePreviewXIconFillColor(), null, new String[]{"#6B6D82"}, new String[]{"#FFFFFF"}, new String[0]);
    }

    private final List e(boolean z10, List list) {
        a c0351b;
        ArrayList arrayList = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            d dVar = (d) it.next();
            if (dVar instanceof d.a) {
                d.a aVar = (d.a) dVar;
                File file = new File(aVar.c());
                c0351b = new a.b.C0350a(file, aVar, MimeTypeMap.getSingleton().getMimeTypeFromExtension(cs.j.s(file)));
            } else if (dVar instanceof d.b) {
                d.b bVar = (d.b) dVar;
                c0351b = new a.b.C0351b(bVar.d(), bVar.c(), bVar, MimeTypeMap.getSingleton().getMimeTypeFromExtension(MimeTypeMap.getFileExtensionFromUrl(bVar.d())));
            } else {
                throw new rr.p();
            }
            arrayList.add(c0351b);
        }
        if (z10) {
            arrayList.add(new a.C0349a());
        }
        return arrayList;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void f(x xVar, View view) {
        xVar.f23117b.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void g(x xVar, a aVar, View view) {
        Function1 function1 = xVar.f23121f;
        if (function1 != null) {
            function1.invoke(((a.b) aVar).a());
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public int getItemCount() {
        return this.f23120e.size();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public int getItemViewType(int i10) {
        a aVar = (a) this.f23120e.get(i10);
        if (aVar instanceof a.C0349a) {
            return z2.f23166c;
        }
        if (aVar instanceof a.b) {
            return z2.f23167d;
        }
        throw new rr.p();
    }

    public final void h(Function1 function1) {
        this.f23121f = function1;
    }

    public final void i(boolean z10, List documents) {
        Intrinsics.checkNotNullParameter(documents, "documents");
        List e10 = e(z10, documents);
        List list = this.f23120e;
        e.C0068e b10 = androidx.recyclerview.widget.e.b(new b(list, e10));
        Intrinsics.checkNotNullExpressionValue(b10, "calculateDiff(...)");
        this.f23120e = e10;
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
            if ((aVar2 instanceof a.b.C0350a) && (aVar instanceof a.b.C0350a)) {
                a.b.C0350a c0350a = (a.b.C0350a) aVar;
                if (((a.b.C0350a) aVar2).a().e() != c0350a.a().e()) {
                    if (c0350a.a().e() == 100) {
                        notifyItemChanged(a10);
                    } else {
                        notifyItemChanged(a10, Unit.f31765a);
                    }
                }
            }
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public void onBindViewHolder(RecyclerView.ViewHolder holder, int i10) {
        int i11;
        Intrinsics.checkNotNullParameter(holder, "holder");
        final a aVar = (a) this.f23120e.get(i10);
        if (aVar instanceof a.C0349a) {
            ((go.b) sp.c0.a(holder)).f24461b.setOnClickListener(new View.OnClickListener() { // from class: fo.v
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    x.f(x.this, view);
                }
            });
        } else if (aVar instanceof a.b) {
            go.d dVar = (go.d) sp.c0.a(holder);
            dVar.f24479g.setOnClickListener(new View.OnClickListener() { // from class: fo.w
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    x.g(x.this, aVar, view);
                }
            });
            ImageView imageView = dVar.f24476d;
            Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
            k5.l.a(imageView);
            dVar.f24476d.setImageDrawable(null);
            a.b bVar = (a.b) aVar;
            int i12 = 8;
            if (bVar instanceof a.b.C0350a) {
                ImageView imageView2 = dVar.f24476d;
                a.b.C0350a c0350a = (a.b.C0350a) aVar;
                if (c0350a.a().e() < 100) {
                    i11 = 4;
                } else {
                    i11 = 0;
                }
                imageView2.setVisibility(i11);
                dVar.f24479g.setVisibility(8);
                dVar.f24475c.setText(c0350a.c().getName());
                CircularProgressIndicator circularProgressIndicator = dVar.f24478f;
                if (c0350a.a().e() < 100) {
                    i12 = 0;
                }
                circularProgressIndicator.setVisibility(i12);
                dVar.f24478f.setProgress(c0350a.a().e());
            } else if (bVar instanceof a.b.C0351b) {
                dVar.f24476d.setVisibility(0);
                a.b.C0351b c0351b = (a.b.C0351b) aVar;
                if (Intrinsics.areEqual(c0351b.d(), "application/pdf")) {
                    ImageView imageView3 = dVar.f24476d;
                    Intrinsics.checkNotNullExpressionValue(imageView3, "imageView");
                    Integer valueOf = Integer.valueOf(sp.l.f49950l);
                    v4.h hVar = this.f23116a;
                    h.a r10 = new h.a(imageView3.getContext()).d(valueOf).r(imageView3);
                    r10.o(100, 100);
                    hVar.a(r10.a());
                } else {
                    ImageView imageView4 = dVar.f24476d;
                    Intrinsics.checkNotNullExpressionValue(imageView4, "imageView");
                    String e10 = c0351b.e();
                    v4.h hVar2 = this.f23116a;
                    h.a r11 = new h.a(imageView4.getContext()).d(e10).r(imageView4);
                    r11.c(true);
                    r11.b(100);
                    r11.o(500, 500);
                    hVar2.a(r11.a());
                }
                dVar.f24478f.setVisibility(8);
                dVar.f24479g.setVisibility(0);
                dVar.f24475c.setText(c0351b.c());
            } else {
                throw new rr.p();
            }
        } else {
            throw new rr.p();
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public RecyclerView.ViewHolder onCreateViewHolder(ViewGroup parent, int i10) {
        l5.i iVar;
        l5.i iVar2;
        Intrinsics.checkNotNullParameter(parent, "parent");
        View inflate = this.f23119d.inflate(i10, parent, false);
        if (i10 == z2.f23166c) {
            go.b a10 = go.b.a(inflate);
            Intrinsics.checkNotNullExpressionValue(a10, "bind(...)");
            sp.b0 b0Var = new sp.b0(a10);
            l5.c0 y10 = l5.s.y(((go.b) b0Var.getBinding()).getRoot().getContext(), a3.f22771a);
            if (y10 != null && (iVar2 = (l5.i) y10.b()) != null) {
                ((go.b) b0Var.getBinding()).f24461b.setComposition(iVar2);
            }
            ViewBinding binding = b0Var.getBinding();
            Intrinsics.checkNotNullExpressionValue(binding, "<get-binding>(...)");
            c((go.b) binding);
            return b0Var;
        } else if (i10 == z2.f23167d) {
            go.d a11 = go.d.a(inflate);
            Intrinsics.checkNotNullExpressionValue(a11, "bind(...)");
            sp.b0 b0Var2 = new sp.b0(a11);
            l5.c0 y11 = l5.s.y(((go.d) b0Var2.getBinding()).getRoot().getContext(), a3.f22772b);
            if (y11 != null && (iVar = (l5.i) y11.b()) != null) {
                ((go.d) b0Var2.getBinding()).f24479g.setComposition(iVar);
            }
            ViewBinding binding2 = b0Var2.getBinding();
            Intrinsics.checkNotNullExpressionValue(binding2, "<get-binding>(...)");
            d((go.d) binding2);
            return b0Var2;
        } else {
            throw new IllegalStateException(("Unknown view type " + i10).toString());
        }
    }
}
