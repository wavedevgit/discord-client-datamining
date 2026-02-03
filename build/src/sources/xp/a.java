package xp;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.Filter;
import android.widget.TextView;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import dq.f0;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends ArrayAdapter {

    /* renamed from: d  reason: collision with root package name */
    private final List f53734d;

    /* renamed from: e  reason: collision with root package name */
    private final TextBasedComponentStyle f53735e;

    /* renamed from: xp.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private final class C0746a extends Filter {
        public C0746a() {
        }

        @Override // android.widget.Filter
        protected Filter.FilterResults performFiltering(CharSequence charSequence) {
            Filter.FilterResults filterResults = new Filter.FilterResults();
            filterResults.values = a.this.a();
            filterResults.count = a.this.a().size();
            return filterResults;
        }

        @Override // android.widget.Filter
        protected void publishResults(CharSequence charSequence, Filter.FilterResults filterResults) {
            a.this.notifyDataSetChanged();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a(Context context, int i10, List objects, TextBasedComponentStyle textBasedComponentStyle) {
        super(context, i10, objects);
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(objects, "objects");
        this.f53734d = objects;
        this.f53735e = textBasedComponentStyle;
    }

    public final List a() {
        return this.f53734d;
    }

    @Override // android.widget.ArrayAdapter, android.widget.Filterable
    public Filter getFilter() {
        return new C0746a();
    }

    @Override // android.widget.ArrayAdapter, android.widget.Adapter
    public View getView(int i10, View view, ViewGroup parent) {
        TextView textView;
        Intrinsics.checkNotNullParameter(parent, "parent");
        View view2 = super.getView(i10, view, parent);
        Intrinsics.checkNotNullExpressionValue(view2, "getView(...)");
        TextBasedComponentStyle textBasedComponentStyle = this.f53735e;
        if (textBasedComponentStyle != null) {
            if (view2 instanceof TextView) {
                textView = (TextView) view2;
            } else {
                textView = null;
            }
            if (textView != null) {
                f0.n(textView, textBasedComponentStyle, null, 2, null);
            }
        }
        return view2;
    }
}
