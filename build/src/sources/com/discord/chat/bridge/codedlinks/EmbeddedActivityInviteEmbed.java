package com.discord.chat.bridge.codedlinks;

import com.discord.chat.bridge.structurabletext.StructurableText;
import java.util.List;
import kotlin.Metadata;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010 \n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u000b\n\u0002\b\u0003\bf\u0018\u00002\u00020\u0001R\u0018\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\u0005\u0010\u0006R\u0012\u0010\u0007\u001a\u00020\bX¦\u0004¢\u0006\u0006\u001a\u0004\b\t\u0010\nR\u0014\u0010\u000b\u001a\u0004\u0018\u00010\fX¦\u0004¢\u0006\u0006\u001a\u0004\b\r\u0010\u000eR\u0012\u0010\u000f\u001a\u00020\u0004X¦\u0004¢\u0006\u0006\u001a\u0004\b\u0010\u0010\u0011R\u0012\u0010\u0012\u001a\u00020\u0013X¦\u0004¢\u0006\u0006\u001a\u0004\b\u0014\u0010\u0015¨\u0006\u0016"}, d2 = {"Lcom/discord/chat/bridge/codedlinks/EmbeddedActivityInviteEmbed;", "", "participantAvatarUris", "", "", "getParticipantAvatarUris", "()Ljava/util/List;", "extendedType", "Lcom/discord/chat/bridge/codedlinks/CodedLinkExtendedType;", "getExtendedType", "()Lcom/discord/chat/bridge/codedlinks/CodedLinkExtendedType;", "structurableSubtitleText", "Lcom/discord/chat/bridge/structurabletext/StructurableText;", "getStructurableSubtitleText", "()Lcom/discord/chat/bridge/structurabletext/StructurableText;", "noParticipantsText", "getNoParticipantsText", "()Ljava/lang/String;", "ctaEnabled", "", "getCtaEnabled", "()Z", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface EmbeddedActivityInviteEmbed {
    boolean getCtaEnabled();

    @NotNull
    CodedLinkExtendedType getExtendedType();

    @NotNull
    String getNoParticipantsText();

    @NotNull
    List<String> getParticipantAvatarUris();

    StructurableText getStructurableSubtitleText();
}
