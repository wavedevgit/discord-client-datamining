package rp;

import androidx.recyclerview.widget.RecyclerView;
import androidx.viewbinding.ViewBinding;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b0 extends RecyclerView.ViewHolder {

    /* renamed from: d  reason: collision with root package name */
    private final ViewBinding f49039d;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b0(ViewBinding binding) {
        super(binding.getRoot());
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f49039d = binding;
    }

    public final ViewBinding getBinding() {
        return this.f49039d;
    }
}
