package com.discord.react_gesture_handler.nested_touch;

import android.view.View;
import android.widget.TextView;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.enums.EnumEntries;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\bf\u0018\u00002\u00020\u0001:\u0001\u000fJ\u0010\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\tH&J\u0010\u0010\n\u001a\u00020\u000b2\u0006\u0010\b\u001a\u00020\tH&J\u0010\u0010\f\u001a\u00020\u00072\u0006\u0010\r\u001a\u00020\u000eH&R\u0012\u0010\u0002\u001a\u00020\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\u0004\u0010\u0005¨\u0006\u0010"}, d2 = {"Lcom/discord/react_gesture_handler/nested_touch/NestedClickableSpan;", "", "touchPriority", "Lcom/discord/react_gesture_handler/nested_touch/NestedClickableSpan$TouchPriority;", "getTouchPriority", "()Lcom/discord/react_gesture_handler/nested_touch/NestedClickableSpan$TouchPriority;", ViewProps.ON_CLICK, "", "view", "Landroid/view/View;", "onLongClick", "", "enableHighlight", "textView", "Landroid/widget/TextView;", "TouchPriority", "react_gesture_handler_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface NestedClickableSpan {

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0005\b\u0086\u0081\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005¨\u0006\u0006"}, d2 = {"Lcom/discord/react_gesture_handler/nested_touch/NestedClickableSpan$TouchPriority;", "", "<init>", "(Ljava/lang/String;I)V", "DEFAULT", "HIGH", "react_gesture_handler_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class TouchPriority {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ TouchPriority[] $VALUES;
        public static final TouchPriority DEFAULT = new TouchPriority("DEFAULT", 0);
        public static final TouchPriority HIGH = new TouchPriority("HIGH", 1);

        private static final /* synthetic */ TouchPriority[] $values() {
            return new TouchPriority[]{DEFAULT, HIGH};
        }

        static {
            TouchPriority[] $values = $values();
            $VALUES = $values;
            $ENTRIES = qr.a.a($values);
        }

        private TouchPriority(String str, int i10) {
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static TouchPriority valueOf(String str) {
            return (TouchPriority) Enum.valueOf(TouchPriority.class, str);
        }

        public static TouchPriority[] values() {
            return (TouchPriority[]) $VALUES.clone();
        }
    }

    void enableHighlight(@NotNull TextView textView);

    @NotNull
    TouchPriority getTouchPriority();

    void onClick(@NotNull View view);

    boolean onLongClick(@NotNull View view);
}
