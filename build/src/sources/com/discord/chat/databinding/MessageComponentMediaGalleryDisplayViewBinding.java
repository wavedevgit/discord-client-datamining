package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MessageComponentMediaGalleryDisplayViewBinding implements ViewBinding {
    @NonNull
    public final RecyclerView mosaic;
    @NonNull
    private final View rootView;

    private MessageComponentMediaGalleryDisplayViewBinding(@NonNull View view, @NonNull RecyclerView recyclerView) {
        this.rootView = view;
        this.mosaic = recyclerView;
    }

    @NonNull
    public static MessageComponentMediaGalleryDisplayViewBinding bind(@NonNull View view) {
        int i10 = R.id.mosaic;
        RecyclerView recyclerView = (RecyclerView) a.a(view, i10);
        if (recyclerView != null) {
            return new MessageComponentMediaGalleryDisplayViewBinding(view, recyclerView);
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static MessageComponentMediaGalleryDisplayViewBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.message_component_media_gallery_display_view, viewGroup);
            return bind(viewGroup);
        }
        throw new NullPointerException("parent");
    }

    @Override // androidx.viewbinding.ViewBinding
    @NonNull
    public View getRoot() {
        return this.rootView;
    }
}
