package com.discord.billing.types;

import com.android.billingclient.api.QueryProductDetailsParams;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0010\u000e\n\u0000\bÀ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u001c\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\f\u0010\b\u001a\b\u0012\u0004\u0012\u00020\n0\t¨\u0006\u000b"}, d2 = {"Lcom/discord/billing/types/QueryProductDetailsParams;", "", "<init>", "()V", "create", "Lcom/android/billingclient/api/QueryProductDetailsParams;", "productType", "Lcom/discord/billing/types/ProductType;", "productIds", "", "", "billing_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class QueryProductDetailsParams {
    @NotNull
    public static final QueryProductDetailsParams INSTANCE = new QueryProductDetailsParams();

    private QueryProductDetailsParams() {
    }

    @NotNull
    public final com.android.billingclient.api.QueryProductDetailsParams create(@NotNull ProductType productType, @NotNull List<String> productIds) {
        Intrinsics.checkNotNullParameter(productType, "productType");
        Intrinsics.checkNotNullParameter(productIds, "productIds");
        ArrayList arrayList = new ArrayList();
        for (String str : productIds) {
            QueryProductDetailsParams.b a10 = QueryProductDetailsParams.b.a().b(str).c(productType.getRawProductType()).a();
            Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
            arrayList.add(a10);
        }
        QueryProductDetailsParams.a b10 = com.android.billingclient.api.QueryProductDetailsParams.a().b(arrayList);
        Intrinsics.checkNotNullExpressionValue(b10, "setProductList(...)");
        com.android.billingclient.api.QueryProductDetailsParams a11 = b10.a();
        Intrinsics.checkNotNullExpressionValue(a11, "build(...)");
        return a11;
    }
}
