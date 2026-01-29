package vn;

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
import vn.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x extends RecyclerView.Adapter {

    /* renamed from: a  reason: collision with root package name */
    private final v4.h f51691a;

    /* renamed from: b  reason: collision with root package name */
    private final Function0 f51692b;

    /* renamed from: c  reason: collision with root package name */
    private final StepStyles.DocumentStepStyle f51693c;

    /* renamed from: d  reason: collision with root package name */
    private final LayoutInflater f51694d;

    /* renamed from: e  reason: collision with root package name */
    private List f51695e;

    /* renamed from: f  reason: collision with root package name */
    private Function1 f51696f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class a {

        /* renamed from: vn.x$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0701a extends a {
            public C0701a() {
                super(null);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static abstract class b extends a {

            /* renamed from: vn.x$a$b$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0702a extends b {

                /* renamed from: a  reason: collision with root package name */
                private final File f51697a;

                /* renamed from: b  reason: collision with root package name */
                private final d.a f51698b;

                /* renamed from: c  reason: collision with root package name */
                private final String f51699c;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                public C0702a(File file, d.a document, String str) {
                    super(null);
                    Intrinsics.checkNotNullParameter(file, "file");
                    Intrinsics.checkNotNullParameter(document, "document");
                    this.f51697a = file;
                    this.f51698b = document;
                    this.f51699c = str;
                }

                @Override // vn.x.a.b
                /* renamed from: b */
                public d.a a() {
                    return this.f51698b;
                }

                public final File c() {
                    return this.f51697a;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (!(obj instanceof C0702a)) {
                        return false;
                    }
                    C0702a c0702a = (C0702a) obj;
                    if (Intrinsics.areEqual(this.f51697a, c0702a.f51697a) && Intrinsics.areEqual(this.f51698b, c0702a.f51698b) && Intrinsics.areEqual(this.f51699c, c0702a.f51699c)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    int hashCode;
                    int hashCode2 = ((this.f51697a.hashCode() * 31) + this.f51698b.hashCode()) * 31;
                    String str = this.f51699c;
                    if (str == null) {
                        hashCode = 0;
                    } else {
                        hashCode = str.hashCode();
                    }
                    return hashCode2 + hashCode;
                }

                public String toString() {
                    File file = this.f51697a;
                    d.a aVar = this.f51698b;
                    String str = this.f51699c;
                    return "Local(file=" + file + ", document=" + aVar + ", mimeType=" + str + ")";
                }
            }

            /* renamed from: vn.x$a$b$b  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public static final class C0703b extends b {

                /* renamed from: a  reason: collision with root package name */
                private final String f51700a;

                /* renamed from: b  reason: collision with root package name */
                private final String f51701b;

                /* renamed from: c  reason: collision with root package name */
                private final d.b f51702c;

                /* renamed from: d  reason: collision with root package name */
                private final String f51703d;

                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                public C0703b(String remoteUrl, String str, d.b document, String str2) {
                    super(null);
                    Intrinsics.checkNotNullParameter(remoteUrl, "remoteUrl");
                    Intrinsics.checkNotNullParameter(document, "document");
                    this.f51700a = remoteUrl;
                    this.f51701b = str;
                    this.f51702c = document;
                    this.f51703d = str2;
                }

                @Override // vn.x.a.b
                /* renamed from: b */
                public d.b a() {
                    return this.f51702c;
                }

                public final String c() {
                    return this.f51701b;
                }

                public String d() {
                    return this.f51703d;
                }

                public final String e() {
                    return this.f51700a;
                }

                public boolean equals(Object obj) {
                    if (this == obj) {
                        return true;
                    }
                    if (!(obj instanceof C0703b)) {
                        return false;
                    }
                    C0703b c0703b = (C0703b) obj;
                    if (Intrinsics.areEqual(this.f51700a, c0703b.f51700a) && Intrinsics.areEqual(this.f51701b, c0703b.f51701b) && Intrinsics.areEqual(this.f51702c, c0703b.f51702c) && Intrinsics.areEqual(this.f51703d, c0703b.f51703d)) {
                        return true;
                    }
                    return false;
                }

                public int hashCode() {
                    int hashCode;
                    int hashCode2 = this.f51700a.hashCode() * 31;
                    String str = this.f51701b;
                    int i10 = 0;
                    if (str == null) {
                        hashCode = 0;
                    } else {
                        hashCode = str.hashCode();
                    }
                    int hashCode3 = (((hashCode2 + hashCode) * 31) + this.f51702c.hashCode()) * 31;
                    String str2 = this.f51703d;
                    if (str2 != null) {
                        i10 = str2.hashCode();
                    }
                    return hashCode3 + i10;
                }

                public String toString() {
                    String str = this.f51700a;
                    String str2 = this.f51701b;
                    d.b bVar = this.f51702c;
                    String str3 = this.f51703d;
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
        final /* synthetic */ List f51704a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ List f51705b;

        b(List list, List list2) {
            this.f51704a = list;
            this.f51705b = list2;
        }

        @Override // androidx.recyclerview.widget.e.b
        public boolean areContentsTheSame(int i10, int i11) {
            boolean z10;
            a aVar = (a) this.f51704a.get(i10);
            a aVar2 = (a) this.f51705b.get(i11);
            if (areItemsTheSame(i10, i11)) {
                if (aVar instanceof a.C0701a) {
                    z10 = Intrinsics.areEqual(aVar, aVar2);
                } else if (aVar instanceof a.b) {
                    z10 = true;
                } else {
                    throw new ir.p();
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
            a aVar = (a) this.f51704a.get(i10);
            a aVar2 = (a) this.f51705b.get(i11);
            if (aVar.getClass() != aVar2.getClass()) {
                return false;
            }
            if (aVar instanceof a.C0701a) {
                return true;
            }
            if (aVar instanceof a.b.C0702a) {
                String absolutePath = ((a.b.C0702a) aVar).c().getAbsolutePath();
                Intrinsics.checkNotNull(aVar2, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.document.DocumentTileAdapter.Item.DocumentItem.Local");
                return Intrinsics.areEqual(absolutePath, ((a.b.C0702a) aVar2).c().getAbsolutePath());
            } else if (aVar instanceof a.b.C0703b) {
                String e10 = ((a.b.C0703b) aVar).e();
                Intrinsics.checkNotNull(aVar2, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.document.DocumentTileAdapter.Item.DocumentItem.Remote");
                return Intrinsics.areEqual(e10, ((a.b.C0703b) aVar2).e());
            } else {
                throw new ir.p();
            }
        }

        @Override // androidx.recyclerview.widget.e.b
        public int getNewListSize() {
            return this.f51705b.size();
        }

        @Override // androidx.recyclerview.widget.e.b
        public int getOldListSize() {
            return this.f51704a.size();
        }
    }

    public x(Context context, v4.h imageLoader, Function0 onClickAddButton, StepStyles.DocumentStepStyle documentStepStyle) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(imageLoader, "imageLoader");
        Intrinsics.checkNotNullParameter(onClickAddButton, "onClickAddButton");
        this.f51691a = imageLoader;
        this.f51692b = onClickAddButton;
        this.f51693c = documentStepStyle;
        this.f51694d = LayoutInflater.from(context);
        this.f51695e = CollectionsKt.l();
    }

    private final void c(wn.b bVar) {
        StepStyles.DocumentStepStyle documentStepStyle = this.f51693c;
        if (documentStepStyle == null) {
            return;
        }
        Double imagePreviewBorderRadius = documentStepStyle.getImagePreviewBorderRadius();
        if (imagePreviewBorderRadius != null) {
            bVar.f52710c.setRadius((float) jp.h.a(imagePreviewBorderRadius.doubleValue()));
        }
        Double imagePreviewBorderWidth = this.f51693c.getImagePreviewBorderWidth();
        if (imagePreviewBorderWidth != null) {
            bVar.f52710c.setStrokeWidth((int) Math.ceil(jp.h.a(imagePreviewBorderWidth.doubleValue())));
        }
        Integer imagePreviewBorderColor = this.f51693c.getImagePreviewBorderColor();
        if (imagePreviewBorderColor != null) {
            bVar.f52710c.setStrokeColor(imagePreviewBorderColor.intValue());
        }
        Integer imagePreviewMainAreaFillColor = this.f51693c.getImagePreviewMainAreaFillColor();
        if (imagePreviewMainAreaFillColor != null) {
            bVar.f52709b.setBackgroundColor(imagePreviewMainAreaFillColor.intValue());
        }
        ThemeableLottieAnimationView addButton = bVar.f52709b;
        Intrinsics.checkNotNullExpressionValue(addButton, "addButton");
        cq.g.g(addButton, this.f51693c.getImagePreviewPlusIconStrokeColor(), this.f51693c.getImagePreviewPlusIconFillColor(), null, new String[]{"#FFFFFF"}, new String[]{"#5B3FD3"}, new String[0]);
    }

    private final void d(wn.d dVar) {
        StepStyles.DocumentStepStyle documentStepStyle = this.f51693c;
        if (documentStepStyle == null) {
            return;
        }
        Integer strokeColorValue = documentStepStyle.getStrokeColorValue();
        if (strokeColorValue != null) {
            dVar.f52726f.setIndicatorColor(strokeColorValue.intValue());
        }
        Integer fillColorValue = this.f51693c.getFillColorValue();
        if (fillColorValue != null) {
            dVar.f52726f.setTrackColor(fillColorValue.intValue());
        }
        Integer imagePreviewCropAreaFillColor = this.f51693c.getImagePreviewCropAreaFillColor();
        if (imagePreviewCropAreaFillColor != null) {
            dVar.f52724d.setBackgroundColor(imagePreviewCropAreaFillColor.intValue());
        }
        Double imagePreviewBorderRadius = this.f51693c.getImagePreviewBorderRadius();
        if (imagePreviewBorderRadius != null) {
            dVar.f52722b.setRadius((float) jp.h.a(imagePreviewBorderRadius.doubleValue()));
        }
        Double imagePreviewBorderWidth = this.f51693c.getImagePreviewBorderWidth();
        if (imagePreviewBorderWidth != null) {
            dVar.f52722b.setStrokeWidth((int) Math.ceil(jp.h.a(imagePreviewBorderWidth.doubleValue())));
        }
        Integer imagePreviewBorderColor = this.f51693c.getImagePreviewBorderColor();
        if (imagePreviewBorderColor != null) {
            dVar.f52722b.setStrokeColor(imagePreviewBorderColor.intValue());
        }
        TextBasedComponentStyle imageNameStyleValue = this.f51693c.getImageNameStyleValue();
        if (imageNameStyleValue != null) {
            TextView filenameView = dVar.f52723c;
            Intrinsics.checkNotNullExpressionValue(filenameView, "filenameView");
            cq.f0.n(filenameView, imageNameStyleValue, null, 2, null);
        }
        Integer imagePreviewMainAreaFillColor = this.f51693c.getImagePreviewMainAreaFillColor();
        if (imagePreviewMainAreaFillColor != null) {
            dVar.f52725e.setBackgroundColor(imagePreviewMainAreaFillColor.intValue());
        }
        ThemeableLottieAnimationView removeButton = dVar.f52727g;
        Intrinsics.checkNotNullExpressionValue(removeButton, "removeButton");
        cq.g.g(removeButton, this.f51693c.getImagePreviewXIconStrokeColor(), this.f51693c.getImagePreviewXIconFillColor(), null, new String[]{"#6B6D82"}, new String[]{"#FFFFFF"}, new String[0]);
    }

    private final List e(boolean z10, List list) {
        Object c0703b;
        ArrayList arrayList = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            d dVar = (d) it.next();
            if (dVar instanceof d.a) {
                d.a aVar = (d.a) dVar;
                File file = new File(aVar.c());
                c0703b = new a.b.C0702a(file, aVar, MimeTypeMap.getSingleton().getMimeTypeFromExtension(tr.j.s(file)));
            } else if (dVar instanceof d.b) {
                d.b bVar = (d.b) dVar;
                c0703b = new a.b.C0703b(bVar.d(), bVar.c(), bVar, MimeTypeMap.getSingleton().getMimeTypeFromExtension(MimeTypeMap.getFileExtensionFromUrl(bVar.d())));
            } else {
                throw new ir.p();
            }
            arrayList.add(c0703b);
        }
        if (z10) {
            arrayList.add(new a.C0701a());
        }
        return arrayList;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void f(x xVar, View view) {
        xVar.f51692b.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void g(x xVar, a aVar, View view) {
        Function1 function1 = xVar.f51696f;
        if (function1 != null) {
            function1.invoke(((a.b) aVar).a());
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public int getItemCount() {
        return this.f51695e.size();
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public int getItemViewType(int i10) {
        a aVar = (a) this.f51695e.get(i10);
        if (aVar instanceof a.C0701a) {
            return z2.f51741c;
        }
        if (aVar instanceof a.b) {
            return z2.f51742d;
        }
        throw new ir.p();
    }

    public final void h(Function1 function1) {
        this.f51696f = function1;
    }

    public final void i(boolean z10, List documents) {
        Intrinsics.checkNotNullParameter(documents, "documents");
        List e10 = e(z10, documents);
        List list = this.f51695e;
        e.C0065e b10 = androidx.recyclerview.widget.e.b(new b(list, e10));
        Intrinsics.checkNotNullExpressionValue(b10, "calculateDiff(...)");
        this.f51695e = e10;
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
            if ((aVar2 instanceof a.b.C0702a) && (aVar instanceof a.b.C0702a)) {
                a.b.C0702a c0702a = (a.b.C0702a) aVar;
                if (((a.b.C0702a) aVar2).a().e() != c0702a.a().e()) {
                    if (c0702a.a().e() == 100) {
                        notifyItemChanged(a10);
                    } else {
                        notifyItemChanged(a10, Unit.f33282a);
                    }
                }
            }
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public void onBindViewHolder(RecyclerView.ViewHolder holder, int i10) {
        int i11;
        Intrinsics.checkNotNullParameter(holder, "holder");
        final a aVar = (a) this.f51695e.get(i10);
        if (aVar instanceof a.C0701a) {
            ((wn.b) jp.c0.a(holder)).f52709b.setOnClickListener(new View.OnClickListener() { // from class: vn.v
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    x.f(x.this, view);
                }
            });
        } else if (aVar instanceof a.b) {
            wn.d dVar = (wn.d) jp.c0.a(holder);
            dVar.f52727g.setOnClickListener(new View.OnClickListener() { // from class: vn.w
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    x.g(x.this, aVar, view);
                }
            });
            ImageView imageView = dVar.f52724d;
            Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
            k5.l.a(imageView);
            dVar.f52724d.setImageDrawable(null);
            a.b bVar = (a.b) aVar;
            int i12 = 8;
            if (bVar instanceof a.b.C0702a) {
                ImageView imageView2 = dVar.f52724d;
                a.b.C0702a c0702a = (a.b.C0702a) aVar;
                if (c0702a.a().e() < 100) {
                    i11 = 4;
                } else {
                    i11 = 0;
                }
                imageView2.setVisibility(i11);
                dVar.f52727g.setVisibility(8);
                dVar.f52723c.setText(c0702a.c().getName());
                CircularProgressIndicator circularProgressIndicator = dVar.f52726f;
                if (c0702a.a().e() < 100) {
                    i12 = 0;
                }
                circularProgressIndicator.setVisibility(i12);
                dVar.f52726f.setProgress(c0702a.a().e());
            } else if (bVar instanceof a.b.C0703b) {
                dVar.f52724d.setVisibility(0);
                a.b.C0703b c0703b = (a.b.C0703b) aVar;
                if (Intrinsics.areEqual(c0703b.d(), "application/pdf")) {
                    ImageView imageView3 = dVar.f52724d;
                    Intrinsics.checkNotNullExpressionValue(imageView3, "imageView");
                    Integer valueOf = Integer.valueOf(jp.l.f32317l);
                    v4.h hVar = this.f51691a;
                    h.a r10 = new h.a(imageView3.getContext()).d(valueOf).r(imageView3);
                    r10.o(100, 100);
                    hVar.a(r10.a());
                } else {
                    ImageView imageView4 = dVar.f52724d;
                    Intrinsics.checkNotNullExpressionValue(imageView4, "imageView");
                    String e10 = c0703b.e();
                    v4.h hVar2 = this.f51691a;
                    h.a r11 = new h.a(imageView4.getContext()).d(e10).r(imageView4);
                    r11.c(true);
                    r11.b(100);
                    r11.o(500, 500);
                    hVar2.a(r11.a());
                }
                dVar.f52726f.setVisibility(8);
                dVar.f52727g.setVisibility(0);
                dVar.f52723c.setText(c0703b.c());
            } else {
                throw new ir.p();
            }
        } else {
            throw new ir.p();
        }
    }

    @Override // androidx.recyclerview.widget.RecyclerView.Adapter
    public RecyclerView.ViewHolder onCreateViewHolder(ViewGroup parent, int i10) {
        l5.i iVar;
        l5.i iVar2;
        Intrinsics.checkNotNullParameter(parent, "parent");
        View inflate = this.f51694d.inflate(i10, parent, false);
        if (i10 == z2.f51741c) {
            wn.b a10 = wn.b.a(inflate);
            Intrinsics.checkNotNullExpressionValue(a10, "bind(...)");
            jp.b0 b0Var = new jp.b0(a10);
            l5.b0 w10 = l5.s.w(((wn.b) b0Var.getBinding()).getRoot().getContext(), a3.f51346a);
            if (w10 != null && (iVar2 = (l5.i) w10.b()) != null) {
                ((wn.b) b0Var.getBinding()).f52709b.setComposition(iVar2);
            }
            ViewBinding binding = b0Var.getBinding();
            Intrinsics.checkNotNullExpressionValue(binding, "<get-binding>(...)");
            c((wn.b) binding);
            return b0Var;
        } else if (i10 == z2.f51742d) {
            wn.d a11 = wn.d.a(inflate);
            Intrinsics.checkNotNullExpressionValue(a11, "bind(...)");
            jp.b0 b0Var2 = new jp.b0(a11);
            l5.b0 w11 = l5.s.w(((wn.d) b0Var2.getBinding()).getRoot().getContext(), a3.f51347b);
            if (w11 != null && (iVar = (l5.i) w11.b()) != null) {
                ((wn.d) b0Var2.getBinding()).f52727g.setComposition(iVar);
            }
            ViewBinding binding2 = b0Var2.getBinding();
            Intrinsics.checkNotNullExpressionValue(binding2, "<get-binding>(...)");
            d((wn.d) binding2);
            return b0Var2;
        } else {
            throw new IllegalStateException(("Unknown view type " + i10).toString());
        }
    }
}
